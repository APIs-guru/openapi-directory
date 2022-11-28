package operations

import (
	"openapi/pkg/models/shared"
)

type PalcsRequestBodyCertificateParameters struct {
	ApplicationNo string `json:"applicationNo"`
	LicenseNo     string `json:"licenseNo"`
}

type PalcsRequestBodyFormatEnum string

const (
	PalcsRequestBodyFormatEnumPdf PalcsRequestBodyFormatEnum = "pdf"
)

type PalcsRequestBody struct {
	CertificateParameters *PalcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PalcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PalcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Palcs400ApplicationJSONErrorEnum string

const (
	Palcs400ApplicationJSONErrorEnumMissingParameter Palcs400ApplicationJSONErrorEnum = "missing_parameter"
	Palcs400ApplicationJSONErrorEnumInvalidParameter Palcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Palcs400ApplicationJSONErrorEnumInvalidFormat    Palcs400ApplicationJSONErrorEnum = "invalid_format"
	Palcs400ApplicationJSONErrorEnumInvalidTxnid     Palcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Palcs400ApplicationJSONErrorEnumInvalidConsentid Palcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Palcs400ApplicationJSONErrorDescriptionEnum string

const (
	Palcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Palcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Palcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Palcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Palcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Palcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Palcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Palcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Palcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Palcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Palcs400ApplicationJSON struct {
	Error            *Palcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs401ApplicationJSONErrorEnum string

const (
	Palcs401ApplicationJSONErrorEnumInvalidAuthentication Palcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Palcs401ApplicationJSONErrorEnumInvalidAuthorization  Palcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Palcs401ApplicationJSONErrorDescriptionEnum string

const (
	Palcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Palcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Palcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Palcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Palcs401ApplicationJSON struct {
	Error            *Palcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs404ApplicationJSONErrorEnum string

const (
	Palcs404ApplicationJSONErrorEnumRecordNotFound Palcs404ApplicationJSONErrorEnum = "record_not_found"
	Palcs404ApplicationJSONErrorEnumURLNotFound    Palcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Palcs404ApplicationJSONErrorDescriptionEnum string

const (
	Palcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Palcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Palcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Palcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Palcs404ApplicationJSON struct {
	Error            *Palcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs500ApplicationJSONErrorEnum string

const (
	Palcs500ApplicationJSONErrorEnumInternalServerError Palcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Palcs500ApplicationJSONErrorDescriptionEnum string

const (
	Palcs500ApplicationJSONErrorDescriptionEnumInternalServerError Palcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Palcs500ApplicationJSON struct {
	Error            *Palcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs502ApplicationJSONErrorEnum string

const (
	Palcs502ApplicationJSONErrorEnumBadGatewy Palcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Palcs502ApplicationJSONErrorDescriptionEnum string

const (
	Palcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Palcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Palcs502ApplicationJSON struct {
	Error            *Palcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs503ApplicationJSONErrorEnum string

const (
	Palcs503ApplicationJSONErrorEnumServiceUnavailable Palcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Palcs503ApplicationJSONErrorDescriptionEnum string

const (
	Palcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Palcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Palcs503ApplicationJSON struct {
	Error            *Palcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Palcs504ApplicationJSONErrorEnum string

const (
	Palcs504ApplicationJSONErrorEnumGatewayTimeout Palcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Palcs504ApplicationJSONErrorDescriptionEnum string

const (
	Palcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Palcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Palcs504ApplicationJSON struct {
	Error            *Palcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Palcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PalcsRequest struct {
	Request  *PalcsRequestBody `request:"mediaType=application/json"`
	Security PalcsSecurity
}

type PalcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Palcs400ApplicationJSONObject *Palcs400ApplicationJSON
	Palcs401ApplicationJSONObject *Palcs401ApplicationJSON
	Palcs404ApplicationJSONObject *Palcs404ApplicationJSON
	Palcs500ApplicationJSONObject *Palcs500ApplicationJSON
	Palcs502ApplicationJSONObject *Palcs502ApplicationJSON
	Palcs503ApplicationJSONObject *Palcs503ApplicationJSON
	Palcs504ApplicationJSONObject *Palcs504ApplicationJSON
}
