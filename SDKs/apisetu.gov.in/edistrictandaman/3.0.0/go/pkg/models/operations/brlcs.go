package operations

import (
	"openapi/pkg/models/shared"
)

type BrlcsRequestBodyCertificateParameters struct {
	CertificateNumber string `json:"CertificateNumber"`
}

type BrlcsRequestBodyFormatEnum string

const (
	BrlcsRequestBodyFormatEnumPdf BrlcsRequestBodyFormatEnum = "pdf"
)

type BrlcsRequestBody struct {
	CertificateParameters *BrlcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BrlcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BrlcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Brlcs400ApplicationJSONErrorEnum string

const (
	Brlcs400ApplicationJSONErrorEnumMissingParameter Brlcs400ApplicationJSONErrorEnum = "missing_parameter"
	Brlcs400ApplicationJSONErrorEnumInvalidParameter Brlcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Brlcs400ApplicationJSONErrorEnumInvalidFormat    Brlcs400ApplicationJSONErrorEnum = "invalid_format"
	Brlcs400ApplicationJSONErrorEnumInvalidTxnid     Brlcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Brlcs400ApplicationJSONErrorEnumInvalidConsentid Brlcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Brlcs400ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Brlcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Brlcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Brlcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Brlcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Brlcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Brlcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Brlcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Brlcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Brlcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Brlcs400ApplicationJSON struct {
	Error            *Brlcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs401ApplicationJSONErrorEnum string

const (
	Brlcs401ApplicationJSONErrorEnumInvalidAuthentication Brlcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Brlcs401ApplicationJSONErrorEnumInvalidAuthorization  Brlcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Brlcs401ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Brlcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Brlcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Brlcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Brlcs401ApplicationJSON struct {
	Error            *Brlcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs404ApplicationJSONErrorEnum string

const (
	Brlcs404ApplicationJSONErrorEnumRecordNotFound Brlcs404ApplicationJSONErrorEnum = "record_not_found"
	Brlcs404ApplicationJSONErrorEnumURLNotFound    Brlcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Brlcs404ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Brlcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Brlcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Brlcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Brlcs404ApplicationJSON struct {
	Error            *Brlcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs500ApplicationJSONErrorEnum string

const (
	Brlcs500ApplicationJSONErrorEnumInternalServerError Brlcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Brlcs500ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs500ApplicationJSONErrorDescriptionEnumInternalServerError Brlcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Brlcs500ApplicationJSON struct {
	Error            *Brlcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs502ApplicationJSONErrorEnum string

const (
	Brlcs502ApplicationJSONErrorEnumBadGatewy Brlcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Brlcs502ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Brlcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Brlcs502ApplicationJSON struct {
	Error            *Brlcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs503ApplicationJSONErrorEnum string

const (
	Brlcs503ApplicationJSONErrorEnumServiceUnavailable Brlcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Brlcs503ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Brlcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Brlcs503ApplicationJSON struct {
	Error            *Brlcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Brlcs504ApplicationJSONErrorEnum string

const (
	Brlcs504ApplicationJSONErrorEnumGatewayTimeout Brlcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Brlcs504ApplicationJSONErrorDescriptionEnum string

const (
	Brlcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Brlcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Brlcs504ApplicationJSON struct {
	Error            *Brlcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Brlcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BrlcsRequest struct {
	Request  *BrlcsRequestBody `request:"mediaType=application/json"`
	Security BrlcsSecurity
}

type BrlcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Brlcs400ApplicationJSONObject *Brlcs400ApplicationJSON
	Brlcs401ApplicationJSONObject *Brlcs401ApplicationJSON
	Brlcs404ApplicationJSONObject *Brlcs404ApplicationJSON
	Brlcs500ApplicationJSONObject *Brlcs500ApplicationJSON
	Brlcs502ApplicationJSONObject *Brlcs502ApplicationJSON
	Brlcs503ApplicationJSONObject *Brlcs503ApplicationJSON
	Brlcs504ApplicationJSONObject *Brlcs504ApplicationJSON
}
