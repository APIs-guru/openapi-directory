package operations

import (
	"openapi/pkg/models/shared"
)

type NooclRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type NooclRequestBodyFormatEnum string

const (
	NooclRequestBodyFormatEnumPdf NooclRequestBodyFormatEnum = "pdf"
)

type NooclRequestBody struct {
	CertificateParameters *NooclRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NooclRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NooclSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Noocl400ApplicationJSONErrorEnum string

const (
	Noocl400ApplicationJSONErrorEnumMissingParameter Noocl400ApplicationJSONErrorEnum = "missing_parameter"
	Noocl400ApplicationJSONErrorEnumInvalidParameter Noocl400ApplicationJSONErrorEnum = "invalid_parameter"
	Noocl400ApplicationJSONErrorEnumInvalidFormat    Noocl400ApplicationJSONErrorEnum = "invalid_format"
	Noocl400ApplicationJSONErrorEnumInvalidTxnid     Noocl400ApplicationJSONErrorEnum = "invalid_txnid"
	Noocl400ApplicationJSONErrorEnumInvalidConsentid Noocl400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Noocl400ApplicationJSONErrorDescriptionEnum string

const (
	Noocl400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Noocl400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Noocl400ApplicationJSONErrorDescriptionEnumBadRequest                              Noocl400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Noocl400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Noocl400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Noocl400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Noocl400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Noocl400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Noocl400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Noocl400ApplicationJSON struct {
	Error            *Noocl400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl401ApplicationJSONErrorEnum string

const (
	Noocl401ApplicationJSONErrorEnumInvalidAuthentication Noocl401ApplicationJSONErrorEnum = "invalid_authentication"
	Noocl401ApplicationJSONErrorEnumInvalidAuthorization  Noocl401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Noocl401ApplicationJSONErrorDescriptionEnum string

const (
	Noocl401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Noocl401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Noocl401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Noocl401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Noocl401ApplicationJSON struct {
	Error            *Noocl401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl404ApplicationJSONErrorEnum string

const (
	Noocl404ApplicationJSONErrorEnumRecordNotFound Noocl404ApplicationJSONErrorEnum = "record_not_found"
	Noocl404ApplicationJSONErrorEnumURLNotFound    Noocl404ApplicationJSONErrorEnum = "url_not_found"
)

type Noocl404ApplicationJSONErrorDescriptionEnum string

const (
	Noocl404ApplicationJSONErrorDescriptionEnumNoRecordFound               Noocl404ApplicationJSONErrorDescriptionEnum = "No record found"
	Noocl404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Noocl404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Noocl404ApplicationJSON struct {
	Error            *Noocl404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl500ApplicationJSONErrorEnum string

const (
	Noocl500ApplicationJSONErrorEnumInternalServerError Noocl500ApplicationJSONErrorEnum = "internal_server_error"
)

type Noocl500ApplicationJSONErrorDescriptionEnum string

const (
	Noocl500ApplicationJSONErrorDescriptionEnumInternalServerError Noocl500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Noocl500ApplicationJSON struct {
	Error            *Noocl500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl502ApplicationJSONErrorEnum string

const (
	Noocl502ApplicationJSONErrorEnumBadGatewy Noocl502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Noocl502ApplicationJSONErrorDescriptionEnum string

const (
	Noocl502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Noocl502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Noocl502ApplicationJSON struct {
	Error            *Noocl502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl503ApplicationJSONErrorEnum string

const (
	Noocl503ApplicationJSONErrorEnumServiceUnavailable Noocl503ApplicationJSONErrorEnum = "service_unavailable"
)

type Noocl503ApplicationJSONErrorDescriptionEnum string

const (
	Noocl503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Noocl503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Noocl503ApplicationJSON struct {
	Error            *Noocl503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Noocl504ApplicationJSONErrorEnum string

const (
	Noocl504ApplicationJSONErrorEnumGatewayTimeout Noocl504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Noocl504ApplicationJSONErrorDescriptionEnum string

const (
	Noocl504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Noocl504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Noocl504ApplicationJSON struct {
	Error            *Noocl504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Noocl504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NooclRequest struct {
	Request  *NooclRequestBody `request:"mediaType=application/json"`
	Security NooclSecurity
}

type NooclResponse struct {
	ContentType                   string
	StatusCode                    int64
	Noocl400ApplicationJSONObject *Noocl400ApplicationJSON
	Noocl401ApplicationJSONObject *Noocl401ApplicationJSON
	Noocl404ApplicationJSONObject *Noocl404ApplicationJSON
	Noocl500ApplicationJSONObject *Noocl500ApplicationJSON
	Noocl502ApplicationJSONObject *Noocl502ApplicationJSON
	Noocl503ApplicationJSONObject *Noocl503ApplicationJSON
	Noocl504ApplicationJSONObject *Noocl504ApplicationJSON
}
