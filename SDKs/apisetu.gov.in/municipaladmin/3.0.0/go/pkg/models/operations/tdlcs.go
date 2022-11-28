package operations

import (
	"openapi/pkg/models/shared"
)

type TdlcsRequestBodyCertificateParameters struct {
	DocumentNumber string `json:"DocumentNumber"`
}

type TdlcsRequestBodyFormatEnum string

const (
	TdlcsRequestBodyFormatEnumPdf TdlcsRequestBodyFormatEnum = "pdf"
)

type TdlcsRequestBody struct {
	CertificateParameters *TdlcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                TdlcsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TdlcsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Tdlcs400ApplicationJSONErrorEnum string

const (
	Tdlcs400ApplicationJSONErrorEnumMissingParameter Tdlcs400ApplicationJSONErrorEnum = "missing_parameter"
	Tdlcs400ApplicationJSONErrorEnumInvalidParameter Tdlcs400ApplicationJSONErrorEnum = "invalid_parameter"
	Tdlcs400ApplicationJSONErrorEnumInvalidFormat    Tdlcs400ApplicationJSONErrorEnum = "invalid_format"
	Tdlcs400ApplicationJSONErrorEnumInvalidTxnid     Tdlcs400ApplicationJSONErrorEnum = "invalid_txnid"
	Tdlcs400ApplicationJSONErrorEnumInvalidConsentid Tdlcs400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tdlcs400ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tdlcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tdlcs400ApplicationJSONErrorDescriptionEnumBadRequest                              Tdlcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tdlcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tdlcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tdlcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tdlcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tdlcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tdlcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tdlcs400ApplicationJSON struct {
	Error            *Tdlcs400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs401ApplicationJSONErrorEnum string

const (
	Tdlcs401ApplicationJSONErrorEnumInvalidAuthentication Tdlcs401ApplicationJSONErrorEnum = "invalid_authentication"
	Tdlcs401ApplicationJSONErrorEnumInvalidAuthorization  Tdlcs401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tdlcs401ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tdlcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tdlcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tdlcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tdlcs401ApplicationJSON struct {
	Error            *Tdlcs401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs404ApplicationJSONErrorEnum string

const (
	Tdlcs404ApplicationJSONErrorEnumRecordNotFound Tdlcs404ApplicationJSONErrorEnum = "record_not_found"
	Tdlcs404ApplicationJSONErrorEnumURLNotFound    Tdlcs404ApplicationJSONErrorEnum = "url_not_found"
)

type Tdlcs404ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tdlcs404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tdlcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tdlcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tdlcs404ApplicationJSON struct {
	Error            *Tdlcs404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs500ApplicationJSONErrorEnum string

const (
	Tdlcs500ApplicationJSONErrorEnumInternalServerError Tdlcs500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tdlcs500ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs500ApplicationJSONErrorDescriptionEnumInternalServerError Tdlcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tdlcs500ApplicationJSON struct {
	Error            *Tdlcs500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs502ApplicationJSONErrorEnum string

const (
	Tdlcs502ApplicationJSONErrorEnumBadGatewy Tdlcs502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tdlcs502ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tdlcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tdlcs502ApplicationJSON struct {
	Error            *Tdlcs502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs503ApplicationJSONErrorEnum string

const (
	Tdlcs503ApplicationJSONErrorEnumServiceUnavailable Tdlcs503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tdlcs503ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tdlcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tdlcs503ApplicationJSON struct {
	Error            *Tdlcs503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tdlcs504ApplicationJSONErrorEnum string

const (
	Tdlcs504ApplicationJSONErrorEnumGatewayTimeout Tdlcs504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tdlcs504ApplicationJSONErrorDescriptionEnum string

const (
	Tdlcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tdlcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tdlcs504ApplicationJSON struct {
	Error            *Tdlcs504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tdlcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type TdlcsRequest struct {
	Request  *TdlcsRequestBody `request:"mediaType=application/json"`
	Security TdlcsSecurity
}

type TdlcsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tdlcs400ApplicationJSONObject *Tdlcs400ApplicationJSON
	Tdlcs401ApplicationJSONObject *Tdlcs401ApplicationJSON
	Tdlcs404ApplicationJSONObject *Tdlcs404ApplicationJSON
	Tdlcs500ApplicationJSONObject *Tdlcs500ApplicationJSON
	Tdlcs502ApplicationJSONObject *Tdlcs502ApplicationJSON
	Tdlcs503ApplicationJSONObject *Tdlcs503ApplicationJSON
	Tdlcs504ApplicationJSONObject *Tdlcs504ApplicationJSON
}
