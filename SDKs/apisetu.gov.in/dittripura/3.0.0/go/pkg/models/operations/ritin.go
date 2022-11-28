package operations

import (
	"openapi/pkg/models/shared"
)

type RitinRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type RitinRequestBodyFormatEnum string

const (
	RitinRequestBodyFormatEnumPdf RitinRequestBodyFormatEnum = "pdf"
)

type RitinRequestBody struct {
	CertificateParameters *RitinRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RitinRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RitinSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ritin400ApplicationJSONErrorEnum string

const (
	Ritin400ApplicationJSONErrorEnumMissingParameter Ritin400ApplicationJSONErrorEnum = "missing_parameter"
	Ritin400ApplicationJSONErrorEnumInvalidParameter Ritin400ApplicationJSONErrorEnum = "invalid_parameter"
	Ritin400ApplicationJSONErrorEnumInvalidFormat    Ritin400ApplicationJSONErrorEnum = "invalid_format"
	Ritin400ApplicationJSONErrorEnumInvalidTxnid     Ritin400ApplicationJSONErrorEnum = "invalid_txnid"
	Ritin400ApplicationJSONErrorEnumInvalidConsentid Ritin400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ritin400ApplicationJSONErrorDescriptionEnum string

const (
	Ritin400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ritin400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ritin400ApplicationJSONErrorDescriptionEnumBadRequest                              Ritin400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ritin400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ritin400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ritin400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ritin400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ritin400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ritin400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ritin400ApplicationJSON struct {
	Error            *Ritin400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin401ApplicationJSONErrorEnum string

const (
	Ritin401ApplicationJSONErrorEnumInvalidAuthentication Ritin401ApplicationJSONErrorEnum = "invalid_authentication"
	Ritin401ApplicationJSONErrorEnumInvalidAuthorization  Ritin401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ritin401ApplicationJSONErrorDescriptionEnum string

const (
	Ritin401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ritin401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ritin401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ritin401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ritin401ApplicationJSON struct {
	Error            *Ritin401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin404ApplicationJSONErrorEnum string

const (
	Ritin404ApplicationJSONErrorEnumRecordNotFound Ritin404ApplicationJSONErrorEnum = "record_not_found"
	Ritin404ApplicationJSONErrorEnumURLNotFound    Ritin404ApplicationJSONErrorEnum = "url_not_found"
)

type Ritin404ApplicationJSONErrorDescriptionEnum string

const (
	Ritin404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ritin404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ritin404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ritin404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ritin404ApplicationJSON struct {
	Error            *Ritin404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin500ApplicationJSONErrorEnum string

const (
	Ritin500ApplicationJSONErrorEnumInternalServerError Ritin500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ritin500ApplicationJSONErrorDescriptionEnum string

const (
	Ritin500ApplicationJSONErrorDescriptionEnumInternalServerError Ritin500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ritin500ApplicationJSON struct {
	Error            *Ritin500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin502ApplicationJSONErrorEnum string

const (
	Ritin502ApplicationJSONErrorEnumBadGatewy Ritin502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ritin502ApplicationJSONErrorDescriptionEnum string

const (
	Ritin502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ritin502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ritin502ApplicationJSON struct {
	Error            *Ritin502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin503ApplicationJSONErrorEnum string

const (
	Ritin503ApplicationJSONErrorEnumServiceUnavailable Ritin503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ritin503ApplicationJSONErrorDescriptionEnum string

const (
	Ritin503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ritin503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ritin503ApplicationJSON struct {
	Error            *Ritin503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ritin504ApplicationJSONErrorEnum string

const (
	Ritin504ApplicationJSONErrorEnumGatewayTimeout Ritin504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ritin504ApplicationJSONErrorDescriptionEnum string

const (
	Ritin504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ritin504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ritin504ApplicationJSON struct {
	Error            *Ritin504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ritin504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RitinRequest struct {
	Request  *RitinRequestBody `request:"mediaType=application/json"`
	Security RitinSecurity
}

type RitinResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ritin400ApplicationJSONObject *Ritin400ApplicationJSON
	Ritin401ApplicationJSONObject *Ritin401ApplicationJSON
	Ritin404ApplicationJSONObject *Ritin404ApplicationJSON
	Ritin500ApplicationJSONObject *Ritin500ApplicationJSON
	Ritin502ApplicationJSONObject *Ritin502ApplicationJSON
	Ritin503ApplicationJSONObject *Ritin503ApplicationJSON
	Ritin504ApplicationJSONObject *Ritin504ApplicationJSON
}
