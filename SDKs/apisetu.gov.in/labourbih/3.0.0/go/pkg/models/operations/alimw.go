package operations

import (
	"openapi/pkg/models/shared"
)

type AlimwRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type AlimwRequestBodyFormatEnum string

const (
	AlimwRequestBodyFormatEnumPdf AlimwRequestBodyFormatEnum = "pdf"
)

type AlimwRequestBody struct {
	CertificateParameters *AlimwRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AlimwRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AlimwSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type AlimwRequest struct {
	Request  *AlimwRequestBody `request:"mediaType=application/json"`
	Security AlimwSecurity
}

type Alimw400ApplicationJSONErrorEnum string

const (
	Alimw400ApplicationJSONErrorEnumMissingParameter Alimw400ApplicationJSONErrorEnum = "missing_parameter"
	Alimw400ApplicationJSONErrorEnumInvalidParameter Alimw400ApplicationJSONErrorEnum = "invalid_parameter"
	Alimw400ApplicationJSONErrorEnumInvalidFormat    Alimw400ApplicationJSONErrorEnum = "invalid_format"
	Alimw400ApplicationJSONErrorEnumInvalidTxnid     Alimw400ApplicationJSONErrorEnum = "invalid_txnid"
	Alimw400ApplicationJSONErrorEnumInvalidConsentid Alimw400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Alimw400ApplicationJSONErrorDescriptionEnum string

const (
	Alimw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Alimw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Alimw400ApplicationJSONErrorDescriptionEnumBadRequest                              Alimw400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Alimw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Alimw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Alimw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Alimw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Alimw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Alimw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Alimw400ApplicationJSON struct {
	Error            *Alimw400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw401ApplicationJSONErrorEnum string

const (
	Alimw401ApplicationJSONErrorEnumInvalidAuthentication Alimw401ApplicationJSONErrorEnum = "invalid_authentication"
	Alimw401ApplicationJSONErrorEnumInvalidAuthorization  Alimw401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Alimw401ApplicationJSONErrorDescriptionEnum string

const (
	Alimw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Alimw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Alimw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Alimw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Alimw401ApplicationJSON struct {
	Error            *Alimw401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw404ApplicationJSONErrorEnum string

const (
	Alimw404ApplicationJSONErrorEnumRecordNotFound Alimw404ApplicationJSONErrorEnum = "record_not_found"
	Alimw404ApplicationJSONErrorEnumURLNotFound    Alimw404ApplicationJSONErrorEnum = "url_not_found"
)

type Alimw404ApplicationJSONErrorDescriptionEnum string

const (
	Alimw404ApplicationJSONErrorDescriptionEnumNoRecordFound               Alimw404ApplicationJSONErrorDescriptionEnum = "No record found"
	Alimw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Alimw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Alimw404ApplicationJSON struct {
	Error            *Alimw404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw500ApplicationJSONErrorEnum string

const (
	Alimw500ApplicationJSONErrorEnumInternalServerError Alimw500ApplicationJSONErrorEnum = "internal_server_error"
)

type Alimw500ApplicationJSONErrorDescriptionEnum string

const (
	Alimw500ApplicationJSONErrorDescriptionEnumInternalServerError Alimw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Alimw500ApplicationJSON struct {
	Error            *Alimw500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw502ApplicationJSONErrorEnum string

const (
	Alimw502ApplicationJSONErrorEnumBadGatewy Alimw502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Alimw502ApplicationJSONErrorDescriptionEnum string

const (
	Alimw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Alimw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Alimw502ApplicationJSON struct {
	Error            *Alimw502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw503ApplicationJSONErrorEnum string

const (
	Alimw503ApplicationJSONErrorEnumServiceUnavailable Alimw503ApplicationJSONErrorEnum = "service_unavailable"
)

type Alimw503ApplicationJSONErrorDescriptionEnum string

const (
	Alimw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Alimw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Alimw503ApplicationJSON struct {
	Error            *Alimw503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Alimw504ApplicationJSONErrorEnum string

const (
	Alimw504ApplicationJSONErrorEnumGatewayTimeout Alimw504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Alimw504ApplicationJSONErrorDescriptionEnum string

const (
	Alimw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Alimw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Alimw504ApplicationJSON struct {
	Error            *Alimw504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Alimw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AlimwResponse struct {
	ContentType                   string
	StatusCode                    int64
	Alimw400ApplicationJSONObject *Alimw400ApplicationJSON
	Alimw401ApplicationJSONObject *Alimw401ApplicationJSON
	Alimw404ApplicationJSONObject *Alimw404ApplicationJSON
	Alimw500ApplicationJSONObject *Alimw500ApplicationJSON
	Alimw502ApplicationJSONObject *Alimw502ApplicationJSON
	Alimw503ApplicationJSONObject *Alimw503ApplicationJSON
	Alimw504ApplicationJSONObject *Alimw504ApplicationJSON
}
