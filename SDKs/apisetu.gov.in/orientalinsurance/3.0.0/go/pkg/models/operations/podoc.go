package operations

import (
	"openapi/pkg/models/shared"
)

type PodocRequestBodyCertificateParameters struct {
	Inscode string `json:"INSCODE"`
	Polno   string `json:"POLNO"`
	Startdt string `json:"STARTDT"`
}

type PodocRequestBodyFormatEnum string

const (
	PodocRequestBodyFormatEnumPdf PodocRequestBodyFormatEnum = "pdf"
)

type PodocRequestBody struct {
	CertificateParameters *PodocRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PodocRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PodocSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type PodocRequest struct {
	Request  *PodocRequestBody `request:"mediaType=application/json"`
	Security PodocSecurity
}

type Podoc400ApplicationJSONErrorEnum string

const (
	Podoc400ApplicationJSONErrorEnumMissingParameter Podoc400ApplicationJSONErrorEnum = "missing_parameter"
	Podoc400ApplicationJSONErrorEnumInvalidParameter Podoc400ApplicationJSONErrorEnum = "invalid_parameter"
	Podoc400ApplicationJSONErrorEnumInvalidFormat    Podoc400ApplicationJSONErrorEnum = "invalid_format"
	Podoc400ApplicationJSONErrorEnumInvalidTxnid     Podoc400ApplicationJSONErrorEnum = "invalid_txnid"
	Podoc400ApplicationJSONErrorEnumInvalidConsentid Podoc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Podoc400ApplicationJSONErrorDescriptionEnum string

const (
	Podoc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Podoc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Podoc400ApplicationJSONErrorDescriptionEnumBadRequest                              Podoc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Podoc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Podoc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Podoc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Podoc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Podoc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Podoc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Podoc400ApplicationJSON struct {
	Error            *Podoc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc401ApplicationJSONErrorEnum string

const (
	Podoc401ApplicationJSONErrorEnumInvalidAuthentication Podoc401ApplicationJSONErrorEnum = "invalid_authentication"
	Podoc401ApplicationJSONErrorEnumInvalidAuthorization  Podoc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Podoc401ApplicationJSONErrorDescriptionEnum string

const (
	Podoc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Podoc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Podoc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Podoc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Podoc401ApplicationJSON struct {
	Error            *Podoc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc404ApplicationJSONErrorEnum string

const (
	Podoc404ApplicationJSONErrorEnumRecordNotFound Podoc404ApplicationJSONErrorEnum = "record_not_found"
	Podoc404ApplicationJSONErrorEnumURLNotFound    Podoc404ApplicationJSONErrorEnum = "url_not_found"
)

type Podoc404ApplicationJSONErrorDescriptionEnum string

const (
	Podoc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Podoc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Podoc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Podoc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Podoc404ApplicationJSON struct {
	Error            *Podoc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc500ApplicationJSONErrorEnum string

const (
	Podoc500ApplicationJSONErrorEnumInternalServerError Podoc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Podoc500ApplicationJSONErrorDescriptionEnum string

const (
	Podoc500ApplicationJSONErrorDescriptionEnumInternalServerError Podoc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Podoc500ApplicationJSON struct {
	Error            *Podoc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc502ApplicationJSONErrorEnum string

const (
	Podoc502ApplicationJSONErrorEnumBadGatewy Podoc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Podoc502ApplicationJSONErrorDescriptionEnum string

const (
	Podoc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Podoc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Podoc502ApplicationJSON struct {
	Error            *Podoc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc503ApplicationJSONErrorEnum string

const (
	Podoc503ApplicationJSONErrorEnumServiceUnavailable Podoc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Podoc503ApplicationJSONErrorDescriptionEnum string

const (
	Podoc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Podoc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Podoc503ApplicationJSON struct {
	Error            *Podoc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Podoc504ApplicationJSONErrorEnum string

const (
	Podoc504ApplicationJSONErrorEnumGatewayTimeout Podoc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Podoc504ApplicationJSONErrorDescriptionEnum string

const (
	Podoc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Podoc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Podoc504ApplicationJSON struct {
	Error            *Podoc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Podoc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PodocResponse struct {
	ContentType                   string
	StatusCode                    int64
	Podoc400ApplicationJSONObject *Podoc400ApplicationJSON
	Podoc401ApplicationJSONObject *Podoc401ApplicationJSON
	Podoc404ApplicationJSONObject *Podoc404ApplicationJSON
	Podoc500ApplicationJSONObject *Podoc500ApplicationJSON
	Podoc502ApplicationJSONObject *Podoc502ApplicationJSON
	Podoc503ApplicationJSONObject *Podoc503ApplicationJSON
	Podoc504ApplicationJSONObject *Podoc504ApplicationJSON
}
