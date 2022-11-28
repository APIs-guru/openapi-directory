package operations

import (
	"openapi/pkg/models/shared"
)

type AlsfcRequestBodyCertificateParameters struct {
	UID  string `json:"UID"`
	Lino string `json:"lino"`
}

type AlsfcRequestBodyFormatEnum string

const (
	AlsfcRequestBodyFormatEnumPdf AlsfcRequestBodyFormatEnum = "pdf"
)

type AlsfcRequestBody struct {
	CertificateParameters *AlsfcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AlsfcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AlsfcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Alsfc400ApplicationJSONErrorEnum string

const (
	Alsfc400ApplicationJSONErrorEnumMissingParameter Alsfc400ApplicationJSONErrorEnum = "missing_parameter"
	Alsfc400ApplicationJSONErrorEnumInvalidParameter Alsfc400ApplicationJSONErrorEnum = "invalid_parameter"
	Alsfc400ApplicationJSONErrorEnumInvalidFormat    Alsfc400ApplicationJSONErrorEnum = "invalid_format"
	Alsfc400ApplicationJSONErrorEnumInvalidTxnid     Alsfc400ApplicationJSONErrorEnum = "invalid_txnid"
	Alsfc400ApplicationJSONErrorEnumInvalidConsentid Alsfc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Alsfc400ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Alsfc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Alsfc400ApplicationJSONErrorDescriptionEnumBadRequest                              Alsfc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Alsfc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Alsfc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Alsfc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Alsfc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Alsfc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Alsfc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Alsfc400ApplicationJSON struct {
	Error            *Alsfc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc401ApplicationJSONErrorEnum string

const (
	Alsfc401ApplicationJSONErrorEnumInvalidAuthentication Alsfc401ApplicationJSONErrorEnum = "invalid_authentication"
	Alsfc401ApplicationJSONErrorEnumInvalidAuthorization  Alsfc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Alsfc401ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Alsfc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Alsfc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Alsfc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Alsfc401ApplicationJSON struct {
	Error            *Alsfc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc404ApplicationJSONErrorEnum string

const (
	Alsfc404ApplicationJSONErrorEnumRecordNotFound Alsfc404ApplicationJSONErrorEnum = "record_not_found"
	Alsfc404ApplicationJSONErrorEnumURLNotFound    Alsfc404ApplicationJSONErrorEnum = "url_not_found"
)

type Alsfc404ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Alsfc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Alsfc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Alsfc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Alsfc404ApplicationJSON struct {
	Error            *Alsfc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc500ApplicationJSONErrorEnum string

const (
	Alsfc500ApplicationJSONErrorEnumInternalServerError Alsfc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Alsfc500ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc500ApplicationJSONErrorDescriptionEnumInternalServerError Alsfc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Alsfc500ApplicationJSON struct {
	Error            *Alsfc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc502ApplicationJSONErrorEnum string

const (
	Alsfc502ApplicationJSONErrorEnumBadGatewy Alsfc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Alsfc502ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Alsfc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Alsfc502ApplicationJSON struct {
	Error            *Alsfc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc503ApplicationJSONErrorEnum string

const (
	Alsfc503ApplicationJSONErrorEnumServiceUnavailable Alsfc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Alsfc503ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Alsfc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Alsfc503ApplicationJSON struct {
	Error            *Alsfc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alsfc504ApplicationJSONErrorEnum string

const (
	Alsfc504ApplicationJSONErrorEnumGatewayTimeout Alsfc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Alsfc504ApplicationJSONErrorDescriptionEnum string

const (
	Alsfc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Alsfc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Alsfc504ApplicationJSON struct {
	Error            *Alsfc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alsfc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AlsfcRequest struct {
	Request  *AlsfcRequestBody `request:"mediaType=application/json"`
	Security AlsfcSecurity
}

type AlsfcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Alsfc400ApplicationJSONObject *Alsfc400ApplicationJSON
	Alsfc401ApplicationJSONObject *Alsfc401ApplicationJSON
	Alsfc404ApplicationJSONObject *Alsfc404ApplicationJSON
	Alsfc500ApplicationJSONObject *Alsfc500ApplicationJSON
	Alsfc502ApplicationJSONObject *Alsfc502ApplicationJSON
	Alsfc503ApplicationJSONObject *Alsfc503ApplicationJSON
	Alsfc504ApplicationJSONObject *Alsfc504ApplicationJSON
}
