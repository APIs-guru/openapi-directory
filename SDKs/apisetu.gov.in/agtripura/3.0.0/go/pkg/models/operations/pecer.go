package operations

import (
	"openapi/pkg/models/shared"
)

type PecerRequestBodyCertificateParameters struct {
	AcNo string `json:"AC_NO"`
	Dob  string `json:"DOB"`
}

type PecerRequestBodyFormatEnum string

const (
	PecerRequestBodyFormatEnumPdf PecerRequestBodyFormatEnum = "pdf"
)

type PecerRequestBody struct {
	CertificateParameters *PecerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                PecerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PecerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type PecerRequest struct {
	Request  *PecerRequestBody `request:"mediaType=application/json"`
	Security PecerSecurity
}

type Pecer400ApplicationJSONErrorEnum string

const (
	Pecer400ApplicationJSONErrorEnumMissingParameter Pecer400ApplicationJSONErrorEnum = "missing_parameter"
	Pecer400ApplicationJSONErrorEnumInvalidParameter Pecer400ApplicationJSONErrorEnum = "invalid_parameter"
	Pecer400ApplicationJSONErrorEnumInvalidFormat    Pecer400ApplicationJSONErrorEnum = "invalid_format"
	Pecer400ApplicationJSONErrorEnumInvalidTxnid     Pecer400ApplicationJSONErrorEnum = "invalid_txnid"
	Pecer400ApplicationJSONErrorEnumInvalidConsentid Pecer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Pecer400ApplicationJSONErrorDescriptionEnum string

const (
	Pecer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Pecer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Pecer400ApplicationJSONErrorDescriptionEnumBadRequest                              Pecer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Pecer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Pecer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Pecer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Pecer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Pecer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pecer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Pecer400ApplicationJSON struct {
	Error            *Pecer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer401ApplicationJSONErrorEnum string

const (
	Pecer401ApplicationJSONErrorEnumInvalidAuthentication Pecer401ApplicationJSONErrorEnum = "invalid_authentication"
	Pecer401ApplicationJSONErrorEnumInvalidAuthorization  Pecer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Pecer401ApplicationJSONErrorDescriptionEnum string

const (
	Pecer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Pecer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Pecer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pecer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Pecer401ApplicationJSON struct {
	Error            *Pecer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer404ApplicationJSONErrorEnum string

const (
	Pecer404ApplicationJSONErrorEnumRecordNotFound Pecer404ApplicationJSONErrorEnum = "record_not_found"
	Pecer404ApplicationJSONErrorEnumURLNotFound    Pecer404ApplicationJSONErrorEnum = "url_not_found"
)

type Pecer404ApplicationJSONErrorDescriptionEnum string

const (
	Pecer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Pecer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Pecer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pecer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Pecer404ApplicationJSON struct {
	Error            *Pecer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer500ApplicationJSONErrorEnum string

const (
	Pecer500ApplicationJSONErrorEnumInternalServerError Pecer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Pecer500ApplicationJSONErrorDescriptionEnum string

const (
	Pecer500ApplicationJSONErrorDescriptionEnumInternalServerError Pecer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Pecer500ApplicationJSON struct {
	Error            *Pecer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer502ApplicationJSONErrorEnum string

const (
	Pecer502ApplicationJSONErrorEnumBadGatewy Pecer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Pecer502ApplicationJSONErrorDescriptionEnum string

const (
	Pecer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pecer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Pecer502ApplicationJSON struct {
	Error            *Pecer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer503ApplicationJSONErrorEnum string

const (
	Pecer503ApplicationJSONErrorEnumServiceUnavailable Pecer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Pecer503ApplicationJSONErrorDescriptionEnum string

const (
	Pecer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pecer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Pecer503ApplicationJSON struct {
	Error            *Pecer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pecer504ApplicationJSONErrorEnum string

const (
	Pecer504ApplicationJSONErrorEnumGatewayTimeout Pecer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Pecer504ApplicationJSONErrorDescriptionEnum string

const (
	Pecer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pecer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Pecer504ApplicationJSON struct {
	Error            *Pecer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pecer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type PecerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Pecer400ApplicationJSONObject *Pecer400ApplicationJSON
	Pecer401ApplicationJSONObject *Pecer401ApplicationJSON
	Pecer404ApplicationJSONObject *Pecer404ApplicationJSON
	Pecer500ApplicationJSONObject *Pecer500ApplicationJSON
	Pecer502ApplicationJSONObject *Pecer502ApplicationJSON
	Pecer503ApplicationJSONObject *Pecer503ApplicationJSON
	Pecer504ApplicationJSONObject *Pecer504ApplicationJSON
}
