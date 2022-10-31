package operations

import (
	"openapi/pkg/models/shared"
)

type SslcsRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type SslcsRequestBodyFormatEnum string

const (
	SslcsRequestBodyFormatEnumPdf SslcsRequestBodyFormatEnum = "pdf"
)

type SslcsRequestBody struct {
	CertificateParameters *SslcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SslcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SslcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SslcsRequest struct {
	Request  *SslcsRequestBody `request:"mediaType=application/json"`
	Security SslcsSecurity
}

type Sslcs400ApplicationJSONErrorEnum string

const (
	Sslcs400ApplicationJSONErrorEnumMissingParameter Sslcs400ApplicationJSONErrorEnum = "missing_parameter"
	Sslcs400ApplicationJSONErrorEnumInvalidParameter Sslcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Sslcs400ApplicationJSONErrorEnumInvalidFormat    Sslcs400ApplicationJSONErrorEnum = "invalid_format"
	Sslcs400ApplicationJSONErrorEnumInvalidTxnid     Sslcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Sslcs400ApplicationJSONErrorEnumInvalidConsentid Sslcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Sslcs400ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Sslcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Sslcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Sslcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Sslcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Sslcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Sslcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Sslcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Sslcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sslcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Sslcs400ApplicationJSON struct {
	Error            *Sslcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs401ApplicationJSONErrorEnum string

const (
	Sslcs401ApplicationJSONErrorEnumInvalidAuthentication Sslcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Sslcs401ApplicationJSONErrorEnumInvalidAuthorization  Sslcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Sslcs401ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Sslcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Sslcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sslcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Sslcs401ApplicationJSON struct {
	Error            *Sslcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs404ApplicationJSONErrorEnum string

const (
	Sslcs404ApplicationJSONErrorEnumRecordNotFound Sslcs404ApplicationJSONErrorEnum = "record_not_found"
	Sslcs404ApplicationJSONErrorEnumURLNotFound    Sslcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Sslcs404ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Sslcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Sslcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sslcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Sslcs404ApplicationJSON struct {
	Error            *Sslcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs500ApplicationJSONErrorEnum string

const (
	Sslcs500ApplicationJSONErrorEnumInternalServerError Sslcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Sslcs500ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs500ApplicationJSONErrorDescriptionEnumInternalServerError Sslcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Sslcs500ApplicationJSON struct {
	Error            *Sslcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs502ApplicationJSONErrorEnum string

const (
	Sslcs502ApplicationJSONErrorEnumBadGatewy Sslcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Sslcs502ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sslcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Sslcs502ApplicationJSON struct {
	Error            *Sslcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs503ApplicationJSONErrorEnum string

const (
	Sslcs503ApplicationJSONErrorEnumServiceUnavailable Sslcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Sslcs503ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sslcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Sslcs503ApplicationJSON struct {
	Error            *Sslcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sslcs504ApplicationJSONErrorEnum string

const (
	Sslcs504ApplicationJSONErrorEnumGatewayTimeout Sslcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Sslcs504ApplicationJSONErrorDescriptionEnum string

const (
	Sslcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sslcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Sslcs504ApplicationJSON struct {
	Error            *Sslcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sslcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SslcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Sslcs400ApplicationJSONObject *Sslcs400ApplicationJSON
	Sslcs401ApplicationJSONObject *Sslcs401ApplicationJSON
	Sslcs404ApplicationJSONObject *Sslcs404ApplicationJSON
	Sslcs500ApplicationJSONObject *Sslcs500ApplicationJSON
	Sslcs502ApplicationJSONObject *Sslcs502ApplicationJSON
	Sslcs503ApplicationJSONObject *Sslcs503ApplicationJSON
	Sslcs504ApplicationJSONObject *Sslcs504ApplicationJSON
}
