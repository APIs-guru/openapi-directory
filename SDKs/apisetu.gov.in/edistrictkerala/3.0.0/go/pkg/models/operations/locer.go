package operations

import (
	"openapi/pkg/models/shared"
)

type LocerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type LocerRequestBodyFormatEnum string

const (
	LocerRequestBodyFormatEnumPdf LocerRequestBodyFormatEnum = "pdf"
)

type LocerRequestBody struct {
	CertificateParameters *LocerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                LocerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LocerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LocerRequest struct {
	Request  *LocerRequestBody `request:"mediaType=application/json"`
	Security LocerSecurity
}

type Locer400ApplicationJSONErrorEnum string

const (
	Locer400ApplicationJSONErrorEnumMissingParameter Locer400ApplicationJSONErrorEnum = "missing_parameter"
	Locer400ApplicationJSONErrorEnumInvalidParameter Locer400ApplicationJSONErrorEnum = "invalid_parameter"
	Locer400ApplicationJSONErrorEnumInvalidFormat    Locer400ApplicationJSONErrorEnum = "invalid_format"
	Locer400ApplicationJSONErrorEnumInvalidTxnid     Locer400ApplicationJSONErrorEnum = "invalid_txnid"
	Locer400ApplicationJSONErrorEnumInvalidConsentid Locer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Locer400ApplicationJSONErrorDescriptionEnum string

const (
	Locer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Locer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Locer400ApplicationJSONErrorDescriptionEnumBadRequest                              Locer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Locer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Locer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Locer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Locer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Locer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Locer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Locer400ApplicationJSON struct {
	Error            *Locer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer401ApplicationJSONErrorEnum string

const (
	Locer401ApplicationJSONErrorEnumInvalidAuthentication Locer401ApplicationJSONErrorEnum = "invalid_authentication"
	Locer401ApplicationJSONErrorEnumInvalidAuthorization  Locer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Locer401ApplicationJSONErrorDescriptionEnum string

const (
	Locer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Locer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Locer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Locer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Locer401ApplicationJSON struct {
	Error            *Locer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer404ApplicationJSONErrorEnum string

const (
	Locer404ApplicationJSONErrorEnumRecordNotFound Locer404ApplicationJSONErrorEnum = "record_not_found"
	Locer404ApplicationJSONErrorEnumURLNotFound    Locer404ApplicationJSONErrorEnum = "url_not_found"
)

type Locer404ApplicationJSONErrorDescriptionEnum string

const (
	Locer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Locer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Locer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Locer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Locer404ApplicationJSON struct {
	Error            *Locer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer500ApplicationJSONErrorEnum string

const (
	Locer500ApplicationJSONErrorEnumInternalServerError Locer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Locer500ApplicationJSONErrorDescriptionEnum string

const (
	Locer500ApplicationJSONErrorDescriptionEnumInternalServerError Locer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Locer500ApplicationJSON struct {
	Error            *Locer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer502ApplicationJSONErrorEnum string

const (
	Locer502ApplicationJSONErrorEnumBadGatewy Locer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Locer502ApplicationJSONErrorDescriptionEnum string

const (
	Locer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Locer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Locer502ApplicationJSON struct {
	Error            *Locer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer503ApplicationJSONErrorEnum string

const (
	Locer503ApplicationJSONErrorEnumServiceUnavailable Locer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Locer503ApplicationJSONErrorDescriptionEnum string

const (
	Locer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Locer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Locer503ApplicationJSON struct {
	Error            *Locer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Locer504ApplicationJSONErrorEnum string

const (
	Locer504ApplicationJSONErrorEnumGatewayTimeout Locer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Locer504ApplicationJSONErrorDescriptionEnum string

const (
	Locer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Locer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Locer504ApplicationJSON struct {
	Error            *Locer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Locer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type LocerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Locer400ApplicationJSONObject *Locer400ApplicationJSON
	Locer401ApplicationJSONObject *Locer401ApplicationJSON
	Locer404ApplicationJSONObject *Locer404ApplicationJSON
	Locer500ApplicationJSONObject *Locer500ApplicationJSON
	Locer502ApplicationJSONObject *Locer502ApplicationJSON
	Locer503ApplicationJSONObject *Locer503ApplicationJSON
	Locer504ApplicationJSONObject *Locer504ApplicationJSON
}
