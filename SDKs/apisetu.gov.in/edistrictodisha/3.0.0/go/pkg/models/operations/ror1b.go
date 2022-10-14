package operations

import (
	"openapi/pkg/models/shared"
)

type Ror1bRequestBodyCertificateParameters struct {
	UID   string `json:"UID"`
	Refno string `json:"refno"`
}

type Ror1bRequestBodyFormatEnum string

const (
	Ror1bRequestBodyFormatEnumPdf Ror1bRequestBodyFormatEnum = "pdf"
)

type Ror1bRequestBody struct {
	CertificateParameters *Ror1bRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                Ror1bRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type Ror1bSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ror1bRequest struct {
	Request  *Ror1bRequestBody `request:"mediaType=application/json"`
	Security Ror1bSecurity
}

type Ror1b400ApplicationJSONErrorEnum string

const (
	Ror1b400ApplicationJSONErrorEnumMissingParameter Ror1b400ApplicationJSONErrorEnum = "missing_parameter"
	Ror1b400ApplicationJSONErrorEnumInvalidParameter Ror1b400ApplicationJSONErrorEnum = "invalid_parameter"
	Ror1b400ApplicationJSONErrorEnumInvalidFormat    Ror1b400ApplicationJSONErrorEnum = "invalid_format"
	Ror1b400ApplicationJSONErrorEnumInvalidTxnid     Ror1b400ApplicationJSONErrorEnum = "invalid_txnid"
	Ror1b400ApplicationJSONErrorEnumInvalidConsentid Ror1b400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ror1b400ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ror1b400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ror1b400ApplicationJSONErrorDescriptionEnumBadRequest                              Ror1b400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ror1b400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ror1b400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ror1b400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ror1b400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ror1b400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ror1b400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ror1b400ApplicationJSON struct {
	Error            *Ror1b400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b401ApplicationJSONErrorEnum string

const (
	Ror1b401ApplicationJSONErrorEnumInvalidAuthentication Ror1b401ApplicationJSONErrorEnum = "invalid_authentication"
	Ror1b401ApplicationJSONErrorEnumInvalidAuthorization  Ror1b401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ror1b401ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ror1b401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ror1b401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ror1b401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ror1b401ApplicationJSON struct {
	Error            *Ror1b401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b404ApplicationJSONErrorEnum string

const (
	Ror1b404ApplicationJSONErrorEnumRecordNotFound Ror1b404ApplicationJSONErrorEnum = "record_not_found"
	Ror1b404ApplicationJSONErrorEnumURLNotFound    Ror1b404ApplicationJSONErrorEnum = "url_not_found"
)

type Ror1b404ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ror1b404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ror1b404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ror1b404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ror1b404ApplicationJSON struct {
	Error            *Ror1b404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b500ApplicationJSONErrorEnum string

const (
	Ror1b500ApplicationJSONErrorEnumInternalServerError Ror1b500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ror1b500ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b500ApplicationJSONErrorDescriptionEnumInternalServerError Ror1b500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ror1b500ApplicationJSON struct {
	Error            *Ror1b500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b502ApplicationJSONErrorEnum string

const (
	Ror1b502ApplicationJSONErrorEnumBadGatewy Ror1b502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ror1b502ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ror1b502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ror1b502ApplicationJSON struct {
	Error            *Ror1b502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b503ApplicationJSONErrorEnum string

const (
	Ror1b503ApplicationJSONErrorEnumServiceUnavailable Ror1b503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ror1b503ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ror1b503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ror1b503ApplicationJSON struct {
	Error            *Ror1b503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1b504ApplicationJSONErrorEnum string

const (
	Ror1b504ApplicationJSONErrorEnumGatewayTimeout Ror1b504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ror1b504ApplicationJSONErrorDescriptionEnum string

const (
	Ror1b504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ror1b504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ror1b504ApplicationJSON struct {
	Error            *Ror1b504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ror1b504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ror1bResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ror1b400ApplicationJSONObject *Ror1b400ApplicationJSON
	Ror1b401ApplicationJSONObject *Ror1b401ApplicationJSON
	Ror1b404ApplicationJSONObject *Ror1b404ApplicationJSON
	Ror1b500ApplicationJSONObject *Ror1b500ApplicationJSON
	Ror1b502ApplicationJSONObject *Ror1b502ApplicationJSON
	Ror1b503ApplicationJSONObject *Ror1b503ApplicationJSON
	Ror1b504ApplicationJSONObject *Ror1b504ApplicationJSON
}
