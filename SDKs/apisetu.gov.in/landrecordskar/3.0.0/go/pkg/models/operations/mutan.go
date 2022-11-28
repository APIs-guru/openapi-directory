package operations

import (
	"openapi/pkg/models/shared"
)

type MutanRequestBodyCertificateParameters struct {
	DocumentNumber string `json:"DocumentNumber"`
}

type MutanRequestBodyFormatEnum string

const (
	MutanRequestBodyFormatEnumXML MutanRequestBodyFormatEnum = "xml"
	MutanRequestBodyFormatEnumPdf MutanRequestBodyFormatEnum = "pdf"
)

type MutanRequestBody struct {
	CertificateParameters *MutanRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                MutanRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type MutanSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Mutan400ApplicationJSONErrorEnum string

const (
	Mutan400ApplicationJSONErrorEnumMissingParameter Mutan400ApplicationJSONErrorEnum = "missing_parameter"
	Mutan400ApplicationJSONErrorEnumInvalidParameter Mutan400ApplicationJSONErrorEnum = "invalid_parameter"
	Mutan400ApplicationJSONErrorEnumInvalidFormat    Mutan400ApplicationJSONErrorEnum = "invalid_format"
	Mutan400ApplicationJSONErrorEnumInvalidTxnid     Mutan400ApplicationJSONErrorEnum = "invalid_txnid"
	Mutan400ApplicationJSONErrorEnumInvalidConsentid Mutan400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Mutan400ApplicationJSONErrorDescriptionEnum string

const (
	Mutan400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Mutan400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Mutan400ApplicationJSONErrorDescriptionEnumBadRequest                              Mutan400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Mutan400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Mutan400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Mutan400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Mutan400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Mutan400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mutan400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Mutan400ApplicationJSON struct {
	Error            *Mutan400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan401ApplicationJSONErrorEnum string

const (
	Mutan401ApplicationJSONErrorEnumInvalidAuthentication Mutan401ApplicationJSONErrorEnum = "invalid_authentication"
	Mutan401ApplicationJSONErrorEnumInvalidAuthorization  Mutan401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Mutan401ApplicationJSONErrorDescriptionEnum string

const (
	Mutan401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Mutan401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Mutan401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mutan401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Mutan401ApplicationJSON struct {
	Error            *Mutan401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan404ApplicationJSONErrorEnum string

const (
	Mutan404ApplicationJSONErrorEnumRecordNotFound Mutan404ApplicationJSONErrorEnum = "record_not_found"
	Mutan404ApplicationJSONErrorEnumURLNotFound    Mutan404ApplicationJSONErrorEnum = "url_not_found"
)

type Mutan404ApplicationJSONErrorDescriptionEnum string

const (
	Mutan404ApplicationJSONErrorDescriptionEnumNoRecordFound               Mutan404ApplicationJSONErrorDescriptionEnum = "No record found"
	Mutan404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mutan404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Mutan404ApplicationJSON struct {
	Error            *Mutan404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan500ApplicationJSONErrorEnum string

const (
	Mutan500ApplicationJSONErrorEnumInternalServerError Mutan500ApplicationJSONErrorEnum = "internal_server_error"
)

type Mutan500ApplicationJSONErrorDescriptionEnum string

const (
	Mutan500ApplicationJSONErrorDescriptionEnumInternalServerError Mutan500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Mutan500ApplicationJSON struct {
	Error            *Mutan500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan502ApplicationJSONErrorEnum string

const (
	Mutan502ApplicationJSONErrorEnumBadGatewy Mutan502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Mutan502ApplicationJSONErrorDescriptionEnum string

const (
	Mutan502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mutan502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Mutan502ApplicationJSON struct {
	Error            *Mutan502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan503ApplicationJSONErrorEnum string

const (
	Mutan503ApplicationJSONErrorEnumServiceUnavailable Mutan503ApplicationJSONErrorEnum = "service_unavailable"
)

type Mutan503ApplicationJSONErrorDescriptionEnum string

const (
	Mutan503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mutan503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Mutan503ApplicationJSON struct {
	Error            *Mutan503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mutan504ApplicationJSONErrorEnum string

const (
	Mutan504ApplicationJSONErrorEnumGatewayTimeout Mutan504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Mutan504ApplicationJSONErrorDescriptionEnum string

const (
	Mutan504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mutan504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Mutan504ApplicationJSON struct {
	Error            *Mutan504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mutan504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type MutanRequest struct {
	Request  *MutanRequestBody `request:"mediaType=application/json"`
	Security MutanSecurity
}

type MutanResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Mutan400ApplicationJSONObject *Mutan400ApplicationJSON
	Mutan401ApplicationJSONObject *Mutan401ApplicationJSON
	Mutan404ApplicationJSONObject *Mutan404ApplicationJSON
	Mutan500ApplicationJSONObject *Mutan500ApplicationJSON
	Mutan502ApplicationJSONObject *Mutan502ApplicationJSON
	Mutan503ApplicationJSONObject *Mutan503ApplicationJSON
	Mutan504ApplicationJSONObject *Mutan504ApplicationJSON
}
