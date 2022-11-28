package operations

import (
	"openapi/pkg/models/shared"
)

type PfdawRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	Registration string `json:"Registration"`
}

type PfdawRequestBodyFormatEnum string

const (
	PfdawRequestBodyFormatEnumPdf PfdawRequestBodyFormatEnum = "pdf"
)

type PfdawRequestBody struct {
	CertificateParameters *PfdawRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PfdawRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PfdawSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Pfdaw400ApplicationJSONErrorEnum string

const (
	Pfdaw400ApplicationJSONErrorEnumMissingParameter Pfdaw400ApplicationJSONErrorEnum = "missing_parameter"
	Pfdaw400ApplicationJSONErrorEnumInvalidParameter Pfdaw400ApplicationJSONErrorEnum = "invalid_parameter"
	Pfdaw400ApplicationJSONErrorEnumInvalidFormat    Pfdaw400ApplicationJSONErrorEnum = "invalid_format"
	Pfdaw400ApplicationJSONErrorEnumInvalidTxnid     Pfdaw400ApplicationJSONErrorEnum = "invalid_txnid"
	Pfdaw400ApplicationJSONErrorEnumInvalidConsentid Pfdaw400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Pfdaw400ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Pfdaw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Pfdaw400ApplicationJSONErrorDescriptionEnumBadRequest                              Pfdaw400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Pfdaw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Pfdaw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Pfdaw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Pfdaw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Pfdaw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pfdaw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Pfdaw400ApplicationJSON struct {
	Error            *Pfdaw400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw401ApplicationJSONErrorEnum string

const (
	Pfdaw401ApplicationJSONErrorEnumInvalidAuthentication Pfdaw401ApplicationJSONErrorEnum = "invalid_authentication"
	Pfdaw401ApplicationJSONErrorEnumInvalidAuthorization  Pfdaw401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Pfdaw401ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Pfdaw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Pfdaw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pfdaw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Pfdaw401ApplicationJSON struct {
	Error            *Pfdaw401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw404ApplicationJSONErrorEnum string

const (
	Pfdaw404ApplicationJSONErrorEnumRecordNotFound Pfdaw404ApplicationJSONErrorEnum = "record_not_found"
	Pfdaw404ApplicationJSONErrorEnumURLNotFound    Pfdaw404ApplicationJSONErrorEnum = "url_not_found"
)

type Pfdaw404ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw404ApplicationJSONErrorDescriptionEnumNoRecordFound               Pfdaw404ApplicationJSONErrorDescriptionEnum = "No record found"
	Pfdaw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pfdaw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Pfdaw404ApplicationJSON struct {
	Error            *Pfdaw404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw500ApplicationJSONErrorEnum string

const (
	Pfdaw500ApplicationJSONErrorEnumInternalServerError Pfdaw500ApplicationJSONErrorEnum = "internal_server_error"
)

type Pfdaw500ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw500ApplicationJSONErrorDescriptionEnumInternalServerError Pfdaw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Pfdaw500ApplicationJSON struct {
	Error            *Pfdaw500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw502ApplicationJSONErrorEnum string

const (
	Pfdaw502ApplicationJSONErrorEnumBadGatewy Pfdaw502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Pfdaw502ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pfdaw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Pfdaw502ApplicationJSON struct {
	Error            *Pfdaw502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw503ApplicationJSONErrorEnum string

const (
	Pfdaw503ApplicationJSONErrorEnumServiceUnavailable Pfdaw503ApplicationJSONErrorEnum = "service_unavailable"
)

type Pfdaw503ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pfdaw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Pfdaw503ApplicationJSON struct {
	Error            *Pfdaw503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pfdaw504ApplicationJSONErrorEnum string

const (
	Pfdaw504ApplicationJSONErrorEnumGatewayTimeout Pfdaw504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Pfdaw504ApplicationJSONErrorDescriptionEnum string

const (
	Pfdaw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pfdaw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Pfdaw504ApplicationJSON struct {
	Error            *Pfdaw504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pfdaw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PfdawRequest struct {
	Request  *PfdawRequestBody `request:"mediaType=application/json"`
	Security PfdawSecurity
}

type PfdawResponse struct {
	ContentType                   string
	StatusCode                    int64
	Pfdaw400ApplicationJSONObject *Pfdaw400ApplicationJSON
	Pfdaw401ApplicationJSONObject *Pfdaw401ApplicationJSON
	Pfdaw404ApplicationJSONObject *Pfdaw404ApplicationJSON
	Pfdaw500ApplicationJSONObject *Pfdaw500ApplicationJSON
	Pfdaw502ApplicationJSONObject *Pfdaw502ApplicationJSON
	Pfdaw503ApplicationJSONObject *Pfdaw503ApplicationJSON
	Pfdaw504ApplicationJSONObject *Pfdaw504ApplicationJSON
}
