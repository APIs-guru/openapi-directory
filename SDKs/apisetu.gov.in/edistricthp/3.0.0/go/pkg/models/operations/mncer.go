package operations

import (
	"openapi/pkg/models/shared"
)

type MncerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type MncerRequestBodyFormatEnum string

const (
	MncerRequestBodyFormatEnumPdf MncerRequestBodyFormatEnum = "pdf"
)

type MncerRequestBody struct {
	CertificateParameters *MncerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                MncerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type MncerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type MncerRequest struct {
	Request  *MncerRequestBody `request:"mediaType=application/json"`
	Security MncerSecurity
}

type Mncer400ApplicationJSONErrorEnum string

const (
	Mncer400ApplicationJSONErrorEnumMissingParameter Mncer400ApplicationJSONErrorEnum = "missing_parameter"
	Mncer400ApplicationJSONErrorEnumInvalidParameter Mncer400ApplicationJSONErrorEnum = "invalid_parameter"
	Mncer400ApplicationJSONErrorEnumInvalidFormat    Mncer400ApplicationJSONErrorEnum = "invalid_format"
	Mncer400ApplicationJSONErrorEnumInvalidTxnid     Mncer400ApplicationJSONErrorEnum = "invalid_txnid"
	Mncer400ApplicationJSONErrorEnumInvalidConsentid Mncer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Mncer400ApplicationJSONErrorDescriptionEnum string

const (
	Mncer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Mncer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Mncer400ApplicationJSONErrorDescriptionEnumBadRequest                              Mncer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Mncer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Mncer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Mncer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Mncer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Mncer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mncer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Mncer400ApplicationJSON struct {
	Error            *Mncer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer401ApplicationJSONErrorEnum string

const (
	Mncer401ApplicationJSONErrorEnumInvalidAuthentication Mncer401ApplicationJSONErrorEnum = "invalid_authentication"
	Mncer401ApplicationJSONErrorEnumInvalidAuthorization  Mncer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Mncer401ApplicationJSONErrorDescriptionEnum string

const (
	Mncer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Mncer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Mncer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mncer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Mncer401ApplicationJSON struct {
	Error            *Mncer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer404ApplicationJSONErrorEnum string

const (
	Mncer404ApplicationJSONErrorEnumRecordNotFound Mncer404ApplicationJSONErrorEnum = "record_not_found"
	Mncer404ApplicationJSONErrorEnumURLNotFound    Mncer404ApplicationJSONErrorEnum = "url_not_found"
)

type Mncer404ApplicationJSONErrorDescriptionEnum string

const (
	Mncer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Mncer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Mncer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mncer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Mncer404ApplicationJSON struct {
	Error            *Mncer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer500ApplicationJSONErrorEnum string

const (
	Mncer500ApplicationJSONErrorEnumInternalServerError Mncer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Mncer500ApplicationJSONErrorDescriptionEnum string

const (
	Mncer500ApplicationJSONErrorDescriptionEnumInternalServerError Mncer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Mncer500ApplicationJSON struct {
	Error            *Mncer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer502ApplicationJSONErrorEnum string

const (
	Mncer502ApplicationJSONErrorEnumBadGatewy Mncer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Mncer502ApplicationJSONErrorDescriptionEnum string

const (
	Mncer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mncer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Mncer502ApplicationJSON struct {
	Error            *Mncer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer503ApplicationJSONErrorEnum string

const (
	Mncer503ApplicationJSONErrorEnumServiceUnavailable Mncer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Mncer503ApplicationJSONErrorDescriptionEnum string

const (
	Mncer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mncer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Mncer503ApplicationJSON struct {
	Error            *Mncer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mncer504ApplicationJSONErrorEnum string

const (
	Mncer504ApplicationJSONErrorEnumGatewayTimeout Mncer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Mncer504ApplicationJSONErrorDescriptionEnum string

const (
	Mncer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mncer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Mncer504ApplicationJSON struct {
	Error            *Mncer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mncer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type MncerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Mncer400ApplicationJSONObject *Mncer400ApplicationJSON
	Mncer401ApplicationJSONObject *Mncer401ApplicationJSON
	Mncer404ApplicationJSONObject *Mncer404ApplicationJSON
	Mncer500ApplicationJSONObject *Mncer500ApplicationJSON
	Mncer502ApplicationJSONObject *Mncer502ApplicationJSON
	Mncer503ApplicationJSONObject *Mncer503ApplicationJSON
	Mncer504ApplicationJSONObject *Mncer504ApplicationJSON
}
