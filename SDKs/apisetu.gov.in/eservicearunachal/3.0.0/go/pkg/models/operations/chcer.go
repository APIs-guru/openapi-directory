package operations

import (
	"openapi/pkg/models/shared"
)

type ChcerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	RefNo    string `json:"RefNo"`
	TokenNo  string `json:"TokenNo"`
}

type ChcerRequestBodyFormatEnum string

const (
	ChcerRequestBodyFormatEnumPdf ChcerRequestBodyFormatEnum = "pdf"
)

type ChcerRequestBody struct {
	CertificateParameters *ChcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                ChcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ChcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ChcerRequest struct {
	Request  *ChcerRequestBody `request:"mediaType=application/json"`
	Security ChcerSecurity
}

type Chcer400ApplicationJSONErrorEnum string

const (
	Chcer400ApplicationJSONErrorEnumMissingParameter Chcer400ApplicationJSONErrorEnum = "missing_parameter"
	Chcer400ApplicationJSONErrorEnumInvalidParameter Chcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Chcer400ApplicationJSONErrorEnumInvalidFormat    Chcer400ApplicationJSONErrorEnum = "invalid_format"
	Chcer400ApplicationJSONErrorEnumInvalidTxnid     Chcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Chcer400ApplicationJSONErrorEnumInvalidConsentid Chcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Chcer400ApplicationJSONErrorDescriptionEnum string

const (
	Chcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Chcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Chcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Chcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Chcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Chcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Chcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Chcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Chcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Chcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Chcer400ApplicationJSON struct {
	Error            *Chcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer401ApplicationJSONErrorEnum string

const (
	Chcer401ApplicationJSONErrorEnumInvalidAuthentication Chcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Chcer401ApplicationJSONErrorEnumInvalidAuthorization  Chcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Chcer401ApplicationJSONErrorDescriptionEnum string

const (
	Chcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Chcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Chcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Chcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Chcer401ApplicationJSON struct {
	Error            *Chcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer404ApplicationJSONErrorEnum string

const (
	Chcer404ApplicationJSONErrorEnumRecordNotFound Chcer404ApplicationJSONErrorEnum = "record_not_found"
	Chcer404ApplicationJSONErrorEnumURLNotFound    Chcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Chcer404ApplicationJSONErrorDescriptionEnum string

const (
	Chcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Chcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Chcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Chcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Chcer404ApplicationJSON struct {
	Error            *Chcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer500ApplicationJSONErrorEnum string

const (
	Chcer500ApplicationJSONErrorEnumInternalServerError Chcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Chcer500ApplicationJSONErrorDescriptionEnum string

const (
	Chcer500ApplicationJSONErrorDescriptionEnumInternalServerError Chcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Chcer500ApplicationJSON struct {
	Error            *Chcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer502ApplicationJSONErrorEnum string

const (
	Chcer502ApplicationJSONErrorEnumBadGatewy Chcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Chcer502ApplicationJSONErrorDescriptionEnum string

const (
	Chcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Chcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Chcer502ApplicationJSON struct {
	Error            *Chcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer503ApplicationJSONErrorEnum string

const (
	Chcer503ApplicationJSONErrorEnumServiceUnavailable Chcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Chcer503ApplicationJSONErrorDescriptionEnum string

const (
	Chcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Chcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Chcer503ApplicationJSON struct {
	Error            *Chcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Chcer504ApplicationJSONErrorEnum string

const (
	Chcer504ApplicationJSONErrorEnumGatewayTimeout Chcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Chcer504ApplicationJSONErrorDescriptionEnum string

const (
	Chcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Chcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Chcer504ApplicationJSON struct {
	Error            *Chcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Chcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type ChcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Chcer400ApplicationJSONObject *Chcer400ApplicationJSON
	Chcer401ApplicationJSONObject *Chcer401ApplicationJSON
	Chcer404ApplicationJSONObject *Chcer404ApplicationJSON
	Chcer500ApplicationJSONObject *Chcer500ApplicationJSON
	Chcer502ApplicationJSONObject *Chcer502ApplicationJSON
	Chcer503ApplicationJSONObject *Chcer503ApplicationJSON
	Chcer504ApplicationJSONObject *Chcer504ApplicationJSON
}
