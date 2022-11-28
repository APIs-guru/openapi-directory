package operations

import (
	"openapi/pkg/models/shared"
)

type FslcsRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type FslcsRequestBodyFormatEnum string

const (
	FslcsRequestBodyFormatEnumPdf FslcsRequestBodyFormatEnum = "pdf"
)

type FslcsRequestBody struct {
	CertificateParameters *FslcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                FslcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type FslcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Fslcs400ApplicationJSONErrorEnum string

const (
	Fslcs400ApplicationJSONErrorEnumMissingParameter Fslcs400ApplicationJSONErrorEnum = "missing_parameter"
	Fslcs400ApplicationJSONErrorEnumInvalidParameter Fslcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Fslcs400ApplicationJSONErrorEnumInvalidFormat    Fslcs400ApplicationJSONErrorEnum = "invalid_format"
	Fslcs400ApplicationJSONErrorEnumInvalidTxnid     Fslcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Fslcs400ApplicationJSONErrorEnumInvalidConsentid Fslcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Fslcs400ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Fslcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Fslcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Fslcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Fslcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Fslcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Fslcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Fslcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Fslcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Fslcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Fslcs400ApplicationJSON struct {
	Error            *Fslcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs401ApplicationJSONErrorEnum string

const (
	Fslcs401ApplicationJSONErrorEnumInvalidAuthentication Fslcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Fslcs401ApplicationJSONErrorEnumInvalidAuthorization  Fslcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Fslcs401ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Fslcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Fslcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Fslcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Fslcs401ApplicationJSON struct {
	Error            *Fslcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs404ApplicationJSONErrorEnum string

const (
	Fslcs404ApplicationJSONErrorEnumRecordNotFound Fslcs404ApplicationJSONErrorEnum = "record_not_found"
	Fslcs404ApplicationJSONErrorEnumURLNotFound    Fslcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Fslcs404ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Fslcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Fslcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Fslcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Fslcs404ApplicationJSON struct {
	Error            *Fslcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs500ApplicationJSONErrorEnum string

const (
	Fslcs500ApplicationJSONErrorEnumInternalServerError Fslcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Fslcs500ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs500ApplicationJSONErrorDescriptionEnumInternalServerError Fslcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Fslcs500ApplicationJSON struct {
	Error            *Fslcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs502ApplicationJSONErrorEnum string

const (
	Fslcs502ApplicationJSONErrorEnumBadGatewy Fslcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Fslcs502ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Fslcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Fslcs502ApplicationJSON struct {
	Error            *Fslcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs503ApplicationJSONErrorEnum string

const (
	Fslcs503ApplicationJSONErrorEnumServiceUnavailable Fslcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Fslcs503ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Fslcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Fslcs503ApplicationJSON struct {
	Error            *Fslcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fslcs504ApplicationJSONErrorEnum string

const (
	Fslcs504ApplicationJSONErrorEnumGatewayTimeout Fslcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Fslcs504ApplicationJSONErrorDescriptionEnum string

const (
	Fslcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Fslcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Fslcs504ApplicationJSON struct {
	Error            *Fslcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fslcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type FslcsRequest struct {
	Request  *FslcsRequestBody `request:"mediaType=application/json"`
	Security FslcsSecurity
}

type FslcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Fslcs400ApplicationJSONObject *Fslcs400ApplicationJSON
	Fslcs401ApplicationJSONObject *Fslcs401ApplicationJSON
	Fslcs404ApplicationJSONObject *Fslcs404ApplicationJSON
	Fslcs500ApplicationJSONObject *Fslcs500ApplicationJSON
	Fslcs502ApplicationJSONObject *Fslcs502ApplicationJSON
	Fslcs503ApplicationJSONObject *Fslcs503ApplicationJSON
	Fslcs504ApplicationJSONObject *Fslcs504ApplicationJSON
}
