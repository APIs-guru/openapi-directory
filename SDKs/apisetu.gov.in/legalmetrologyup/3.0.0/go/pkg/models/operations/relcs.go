package operations

import (
	"openapi/pkg/models/shared"
)

type RelcsRequestBodyCertificateParameters struct {
	ApplicationNo string `json:"applicationNo"`
	LicenseNo     string `json:"licenseNo"`
}

type RelcsRequestBodyFormatEnum string

const (
	RelcsRequestBodyFormatEnumPdf RelcsRequestBodyFormatEnum = "pdf"
)

type RelcsRequestBody struct {
	CertificateParameters *RelcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RelcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RelcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RelcsRequest struct {
	Request  *RelcsRequestBody `request:"mediaType=application/json"`
	Security RelcsSecurity
}

type Relcs400ApplicationJSONErrorEnum string

const (
	Relcs400ApplicationJSONErrorEnumMissingParameter Relcs400ApplicationJSONErrorEnum = "missing_parameter"
	Relcs400ApplicationJSONErrorEnumInvalidParameter Relcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Relcs400ApplicationJSONErrorEnumInvalidFormat    Relcs400ApplicationJSONErrorEnum = "invalid_format"
	Relcs400ApplicationJSONErrorEnumInvalidTxnid     Relcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Relcs400ApplicationJSONErrorEnumInvalidConsentid Relcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Relcs400ApplicationJSONErrorDescriptionEnum string

const (
	Relcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Relcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Relcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Relcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Relcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Relcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Relcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Relcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Relcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Relcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Relcs400ApplicationJSON struct {
	Error            *Relcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs401ApplicationJSONErrorEnum string

const (
	Relcs401ApplicationJSONErrorEnumInvalidAuthentication Relcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Relcs401ApplicationJSONErrorEnumInvalidAuthorization  Relcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Relcs401ApplicationJSONErrorDescriptionEnum string

const (
	Relcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Relcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Relcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Relcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Relcs401ApplicationJSON struct {
	Error            *Relcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs404ApplicationJSONErrorEnum string

const (
	Relcs404ApplicationJSONErrorEnumRecordNotFound Relcs404ApplicationJSONErrorEnum = "record_not_found"
	Relcs404ApplicationJSONErrorEnumURLNotFound    Relcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Relcs404ApplicationJSONErrorDescriptionEnum string

const (
	Relcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Relcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Relcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Relcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Relcs404ApplicationJSON struct {
	Error            *Relcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs500ApplicationJSONErrorEnum string

const (
	Relcs500ApplicationJSONErrorEnumInternalServerError Relcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Relcs500ApplicationJSONErrorDescriptionEnum string

const (
	Relcs500ApplicationJSONErrorDescriptionEnumInternalServerError Relcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Relcs500ApplicationJSON struct {
	Error            *Relcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs502ApplicationJSONErrorEnum string

const (
	Relcs502ApplicationJSONErrorEnumBadGatewy Relcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Relcs502ApplicationJSONErrorDescriptionEnum string

const (
	Relcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Relcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Relcs502ApplicationJSON struct {
	Error            *Relcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs503ApplicationJSONErrorEnum string

const (
	Relcs503ApplicationJSONErrorEnumServiceUnavailable Relcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Relcs503ApplicationJSONErrorDescriptionEnum string

const (
	Relcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Relcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Relcs503ApplicationJSON struct {
	Error            *Relcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Relcs504ApplicationJSONErrorEnum string

const (
	Relcs504ApplicationJSONErrorEnumGatewayTimeout Relcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Relcs504ApplicationJSONErrorDescriptionEnum string

const (
	Relcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Relcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Relcs504ApplicationJSON struct {
	Error            *Relcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Relcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RelcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Relcs400ApplicationJSONObject *Relcs400ApplicationJSON
	Relcs401ApplicationJSONObject *Relcs401ApplicationJSON
	Relcs404ApplicationJSONObject *Relcs404ApplicationJSON
	Relcs500ApplicationJSONObject *Relcs500ApplicationJSON
	Relcs502ApplicationJSONObject *Relcs502ApplicationJSON
	Relcs503ApplicationJSONObject *Relcs503ApplicationJSON
	Relcs504ApplicationJSONObject *Relcs504ApplicationJSON
}
