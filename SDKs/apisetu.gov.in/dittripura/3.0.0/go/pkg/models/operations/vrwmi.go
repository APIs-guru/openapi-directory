package operations

import (
	"openapi/pkg/models/shared"
)

type VrwmiRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type VrwmiRequestBodyFormatEnum string

const (
	VrwmiRequestBodyFormatEnumPdf VrwmiRequestBodyFormatEnum = "pdf"
)

type VrwmiRequestBody struct {
	CertificateParameters *VrwmiRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                VrwmiRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type VrwmiSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Vrwmi400ApplicationJSONErrorEnum string

const (
	Vrwmi400ApplicationJSONErrorEnumMissingParameter Vrwmi400ApplicationJSONErrorEnum = "missing_parameter"
	Vrwmi400ApplicationJSONErrorEnumInvalidParameter Vrwmi400ApplicationJSONErrorEnum = "invalid_parameter"
	Vrwmi400ApplicationJSONErrorEnumInvalidFormat    Vrwmi400ApplicationJSONErrorEnum = "invalid_format"
	Vrwmi400ApplicationJSONErrorEnumInvalidTxnid     Vrwmi400ApplicationJSONErrorEnum = "invalid_txnid"
	Vrwmi400ApplicationJSONErrorEnumInvalidConsentid Vrwmi400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Vrwmi400ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Vrwmi400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Vrwmi400ApplicationJSONErrorDescriptionEnumBadRequest                              Vrwmi400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Vrwmi400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Vrwmi400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Vrwmi400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Vrwmi400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Vrwmi400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Vrwmi400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Vrwmi400ApplicationJSON struct {
	Error            *Vrwmi400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi401ApplicationJSONErrorEnum string

const (
	Vrwmi401ApplicationJSONErrorEnumInvalidAuthentication Vrwmi401ApplicationJSONErrorEnum = "invalid_authentication"
	Vrwmi401ApplicationJSONErrorEnumInvalidAuthorization  Vrwmi401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Vrwmi401ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Vrwmi401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Vrwmi401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Vrwmi401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Vrwmi401ApplicationJSON struct {
	Error            *Vrwmi401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi404ApplicationJSONErrorEnum string

const (
	Vrwmi404ApplicationJSONErrorEnumRecordNotFound Vrwmi404ApplicationJSONErrorEnum = "record_not_found"
	Vrwmi404ApplicationJSONErrorEnumURLNotFound    Vrwmi404ApplicationJSONErrorEnum = "url_not_found"
)

type Vrwmi404ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi404ApplicationJSONErrorDescriptionEnumNoRecordFound               Vrwmi404ApplicationJSONErrorDescriptionEnum = "No record found"
	Vrwmi404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Vrwmi404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Vrwmi404ApplicationJSON struct {
	Error            *Vrwmi404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi500ApplicationJSONErrorEnum string

const (
	Vrwmi500ApplicationJSONErrorEnumInternalServerError Vrwmi500ApplicationJSONErrorEnum = "internal_server_error"
)

type Vrwmi500ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi500ApplicationJSONErrorDescriptionEnumInternalServerError Vrwmi500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Vrwmi500ApplicationJSON struct {
	Error            *Vrwmi500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi502ApplicationJSONErrorEnum string

const (
	Vrwmi502ApplicationJSONErrorEnumBadGatewy Vrwmi502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Vrwmi502ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Vrwmi502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Vrwmi502ApplicationJSON struct {
	Error            *Vrwmi502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi503ApplicationJSONErrorEnum string

const (
	Vrwmi503ApplicationJSONErrorEnumServiceUnavailable Vrwmi503ApplicationJSONErrorEnum = "service_unavailable"
)

type Vrwmi503ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Vrwmi503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Vrwmi503ApplicationJSON struct {
	Error            *Vrwmi503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vrwmi504ApplicationJSONErrorEnum string

const (
	Vrwmi504ApplicationJSONErrorEnumGatewayTimeout Vrwmi504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Vrwmi504ApplicationJSONErrorDescriptionEnum string

const (
	Vrwmi504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Vrwmi504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Vrwmi504ApplicationJSON struct {
	Error            *Vrwmi504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vrwmi504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type VrwmiRequest struct {
	Request  *VrwmiRequestBody `request:"mediaType=application/json"`
	Security VrwmiSecurity
}

type VrwmiResponse struct {
	ContentType                   string
	StatusCode                    int64
	Vrwmi400ApplicationJSONObject *Vrwmi400ApplicationJSON
	Vrwmi401ApplicationJSONObject *Vrwmi401ApplicationJSON
	Vrwmi404ApplicationJSONObject *Vrwmi404ApplicationJSON
	Vrwmi500ApplicationJSONObject *Vrwmi500ApplicationJSON
	Vrwmi502ApplicationJSONObject *Vrwmi502ApplicationJSON
	Vrwmi503ApplicationJSONObject *Vrwmi503ApplicationJSON
	Vrwmi504ApplicationJSONObject *Vrwmi504ApplicationJSON
}
