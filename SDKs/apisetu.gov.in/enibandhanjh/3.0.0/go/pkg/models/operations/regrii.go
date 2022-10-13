package operations

import (
	"openapi/pkg/models/shared"
)

type RegriiRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Regno    string `json:"regno"`
	SroID    string `json:"sro_id"`
	Yr       string `json:"yr"`
}

type RegriiRequestBodyFormatEnum string

const (
	RegriiRequestBodyFormatEnumPdf RegriiRequestBodyFormatEnum = "pdf"
)

type RegriiRequestBody struct {
	CertificateParameters *RegriiRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                            `json:"consentArtifact"`
	Format                RegriiRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                  `json:"txnId"`
}

type RegriiSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RegriiRequest struct {
	Request  *RegriiRequestBody `request:"mediaType=application/json"`
	Security RegriiSecurity
}

type Regrii400ApplicationJSONErrorEnum string

const (
	Regrii400ApplicationJSONErrorEnumMissingParameter Regrii400ApplicationJSONErrorEnum = "missing_parameter"
	Regrii400ApplicationJSONErrorEnumInvalidParameter Regrii400ApplicationJSONErrorEnum = "invalid_parameter"
	Regrii400ApplicationJSONErrorEnumInvalidFormat    Regrii400ApplicationJSONErrorEnum = "invalid_format"
	Regrii400ApplicationJSONErrorEnumInvalidTxnid     Regrii400ApplicationJSONErrorEnum = "invalid_txnid"
	Regrii400ApplicationJSONErrorEnumInvalidConsentid Regrii400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Regrii400ApplicationJSONErrorDescriptionEnum string

const (
	Regrii400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Regrii400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Regrii400ApplicationJSONErrorDescriptionEnumBadRequest                              Regrii400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Regrii400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Regrii400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Regrii400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Regrii400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Regrii400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Regrii400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Regrii400ApplicationJSON struct {
	Error            *Regrii400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii401ApplicationJSONErrorEnum string

const (
	Regrii401ApplicationJSONErrorEnumInvalidAuthentication Regrii401ApplicationJSONErrorEnum = "invalid_authentication"
	Regrii401ApplicationJSONErrorEnumInvalidAuthorization  Regrii401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Regrii401ApplicationJSONErrorDescriptionEnum string

const (
	Regrii401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Regrii401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Regrii401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Regrii401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Regrii401ApplicationJSON struct {
	Error            *Regrii401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii404ApplicationJSONErrorEnum string

const (
	Regrii404ApplicationJSONErrorEnumRecordNotFound Regrii404ApplicationJSONErrorEnum = "record_not_found"
	Regrii404ApplicationJSONErrorEnumURLNotFound    Regrii404ApplicationJSONErrorEnum = "url_not_found"
)

type Regrii404ApplicationJSONErrorDescriptionEnum string

const (
	Regrii404ApplicationJSONErrorDescriptionEnumNoRecordFound               Regrii404ApplicationJSONErrorDescriptionEnum = "No record found"
	Regrii404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Regrii404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Regrii404ApplicationJSON struct {
	Error            *Regrii404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii500ApplicationJSONErrorEnum string

const (
	Regrii500ApplicationJSONErrorEnumInternalServerError Regrii500ApplicationJSONErrorEnum = "internal_server_error"
)

type Regrii500ApplicationJSONErrorDescriptionEnum string

const (
	Regrii500ApplicationJSONErrorDescriptionEnumInternalServerError Regrii500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Regrii500ApplicationJSON struct {
	Error            *Regrii500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii502ApplicationJSONErrorEnum string

const (
	Regrii502ApplicationJSONErrorEnumBadGatewy Regrii502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Regrii502ApplicationJSONErrorDescriptionEnum string

const (
	Regrii502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Regrii502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Regrii502ApplicationJSON struct {
	Error            *Regrii502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii503ApplicationJSONErrorEnum string

const (
	Regrii503ApplicationJSONErrorEnumServiceUnavailable Regrii503ApplicationJSONErrorEnum = "service_unavailable"
)

type Regrii503ApplicationJSONErrorDescriptionEnum string

const (
	Regrii503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Regrii503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Regrii503ApplicationJSON struct {
	Error            *Regrii503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Regrii504ApplicationJSONErrorEnum string

const (
	Regrii504ApplicationJSONErrorEnumGatewayTimeout Regrii504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Regrii504ApplicationJSONErrorDescriptionEnum string

const (
	Regrii504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Regrii504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Regrii504ApplicationJSON struct {
	Error            *Regrii504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Regrii504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type RegriiResponse struct {
	ContentType                    string
	StatusCode                     int64
	Regrii400ApplicationJSONObject *Regrii400ApplicationJSON
	Regrii401ApplicationJSONObject *Regrii401ApplicationJSON
	Regrii404ApplicationJSONObject *Regrii404ApplicationJSON
	Regrii500ApplicationJSONObject *Regrii500ApplicationJSON
	Regrii502ApplicationJSONObject *Regrii502ApplicationJSON
	Regrii503ApplicationJSONObject *Regrii503ApplicationJSON
	Regrii504ApplicationJSONObject *Regrii504ApplicationJSON
}
