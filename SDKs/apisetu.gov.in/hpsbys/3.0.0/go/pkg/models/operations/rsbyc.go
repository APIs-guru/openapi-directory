package operations

import (
	"openapi/pkg/models/shared"
)

type RsbycRequestBodyCertificateParameters struct {
	UID string `json:"UID"`
}

type RsbycRequestBodyFormatEnum string

const (
	RsbycRequestBodyFormatEnumPdf RsbycRequestBodyFormatEnum = "pdf"
)

type RsbycRequestBody struct {
	CertificateParameters *RsbycRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RsbycRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RsbycSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RsbycRequest struct {
	Request  *RsbycRequestBody `request:"mediaType=application/json"`
	Security RsbycSecurity
}

type Rsbyc400ApplicationJSONErrorEnum string

const (
	Rsbyc400ApplicationJSONErrorEnumMissingParameter Rsbyc400ApplicationJSONErrorEnum = "missing_parameter"
	Rsbyc400ApplicationJSONErrorEnumInvalidParameter Rsbyc400ApplicationJSONErrorEnum = "invalid_parameter"
	Rsbyc400ApplicationJSONErrorEnumInvalidFormat    Rsbyc400ApplicationJSONErrorEnum = "invalid_format"
	Rsbyc400ApplicationJSONErrorEnumInvalidTxnid     Rsbyc400ApplicationJSONErrorEnum = "invalid_txnid"
	Rsbyc400ApplicationJSONErrorEnumInvalidConsentid Rsbyc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Rsbyc400ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Rsbyc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Rsbyc400ApplicationJSONErrorDescriptionEnumBadRequest                              Rsbyc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Rsbyc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Rsbyc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Rsbyc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Rsbyc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Rsbyc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rsbyc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Rsbyc400ApplicationJSON struct {
	Error            *Rsbyc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc401ApplicationJSONErrorEnum string

const (
	Rsbyc401ApplicationJSONErrorEnumInvalidAuthentication Rsbyc401ApplicationJSONErrorEnum = "invalid_authentication"
	Rsbyc401ApplicationJSONErrorEnumInvalidAuthorization  Rsbyc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Rsbyc401ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Rsbyc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Rsbyc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rsbyc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Rsbyc401ApplicationJSON struct {
	Error            *Rsbyc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc404ApplicationJSONErrorEnum string

const (
	Rsbyc404ApplicationJSONErrorEnumRecordNotFound Rsbyc404ApplicationJSONErrorEnum = "record_not_found"
	Rsbyc404ApplicationJSONErrorEnumURLNotFound    Rsbyc404ApplicationJSONErrorEnum = "url_not_found"
)

type Rsbyc404ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Rsbyc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Rsbyc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rsbyc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Rsbyc404ApplicationJSON struct {
	Error            *Rsbyc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc500ApplicationJSONErrorEnum string

const (
	Rsbyc500ApplicationJSONErrorEnumInternalServerError Rsbyc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Rsbyc500ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc500ApplicationJSONErrorDescriptionEnumInternalServerError Rsbyc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Rsbyc500ApplicationJSON struct {
	Error            *Rsbyc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc502ApplicationJSONErrorEnum string

const (
	Rsbyc502ApplicationJSONErrorEnumBadGatewy Rsbyc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Rsbyc502ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rsbyc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Rsbyc502ApplicationJSON struct {
	Error            *Rsbyc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc503ApplicationJSONErrorEnum string

const (
	Rsbyc503ApplicationJSONErrorEnumServiceUnavailable Rsbyc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Rsbyc503ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rsbyc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Rsbyc503ApplicationJSON struct {
	Error            *Rsbyc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rsbyc504ApplicationJSONErrorEnum string

const (
	Rsbyc504ApplicationJSONErrorEnumGatewayTimeout Rsbyc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Rsbyc504ApplicationJSONErrorDescriptionEnum string

const (
	Rsbyc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rsbyc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Rsbyc504ApplicationJSON struct {
	Error            *Rsbyc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rsbyc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RsbycResponse struct {
	ContentType                   string
	StatusCode                    int64
	Rsbyc400ApplicationJSONObject *Rsbyc400ApplicationJSON
	Rsbyc401ApplicationJSONObject *Rsbyc401ApplicationJSON
	Rsbyc404ApplicationJSONObject *Rsbyc404ApplicationJSON
	Rsbyc500ApplicationJSONObject *Rsbyc500ApplicationJSON
	Rsbyc502ApplicationJSONObject *Rsbyc502ApplicationJSON
	Rsbyc503ApplicationJSONObject *Rsbyc503ApplicationJSON
	Rsbyc504ApplicationJSONObject *Rsbyc504ApplicationJSON
}
