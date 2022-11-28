package operations

import (
	"openapi/pkg/models/shared"
)

type MripcRequestBodyCertificateParameters struct {
	CustomerID      string `json:"customer_Id"`
	PolicyNumber    string `json:"policy_Number"`
	PolicyStartDate string `json:"policy_StartDate"`
}

type MripcRequestBodyFormatEnum string

const (
	MripcRequestBodyFormatEnumPdf MripcRequestBodyFormatEnum = "pdf"
)

type MripcRequestBody struct {
	CertificateParameters *MripcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                MripcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type MripcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Mripc400ApplicationJSONErrorEnum string

const (
	Mripc400ApplicationJSONErrorEnumMissingParameter Mripc400ApplicationJSONErrorEnum = "missing_parameter"
	Mripc400ApplicationJSONErrorEnumInvalidParameter Mripc400ApplicationJSONErrorEnum = "invalid_parameter"
	Mripc400ApplicationJSONErrorEnumInvalidFormat    Mripc400ApplicationJSONErrorEnum = "invalid_format"
	Mripc400ApplicationJSONErrorEnumInvalidTxnid     Mripc400ApplicationJSONErrorEnum = "invalid_txnid"
	Mripc400ApplicationJSONErrorEnumInvalidConsentid Mripc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Mripc400ApplicationJSONErrorDescriptionEnum string

const (
	Mripc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Mripc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Mripc400ApplicationJSONErrorDescriptionEnumBadRequest                              Mripc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Mripc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Mripc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Mripc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Mripc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Mripc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mripc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Mripc400ApplicationJSON struct {
	Error            *Mripc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc401ApplicationJSONErrorEnum string

const (
	Mripc401ApplicationJSONErrorEnumInvalidAuthentication Mripc401ApplicationJSONErrorEnum = "invalid_authentication"
	Mripc401ApplicationJSONErrorEnumInvalidAuthorization  Mripc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Mripc401ApplicationJSONErrorDescriptionEnum string

const (
	Mripc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Mripc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Mripc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mripc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Mripc401ApplicationJSON struct {
	Error            *Mripc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc404ApplicationJSONErrorEnum string

const (
	Mripc404ApplicationJSONErrorEnumRecordNotFound Mripc404ApplicationJSONErrorEnum = "record_not_found"
	Mripc404ApplicationJSONErrorEnumURLNotFound    Mripc404ApplicationJSONErrorEnum = "url_not_found"
)

type Mripc404ApplicationJSONErrorDescriptionEnum string

const (
	Mripc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Mripc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Mripc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mripc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Mripc404ApplicationJSON struct {
	Error            *Mripc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc500ApplicationJSONErrorEnum string

const (
	Mripc500ApplicationJSONErrorEnumInternalServerError Mripc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Mripc500ApplicationJSONErrorDescriptionEnum string

const (
	Mripc500ApplicationJSONErrorDescriptionEnumInternalServerError Mripc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Mripc500ApplicationJSON struct {
	Error            *Mripc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc502ApplicationJSONErrorEnum string

const (
	Mripc502ApplicationJSONErrorEnumBadGatewy Mripc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Mripc502ApplicationJSONErrorDescriptionEnum string

const (
	Mripc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mripc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Mripc502ApplicationJSON struct {
	Error            *Mripc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc503ApplicationJSONErrorEnum string

const (
	Mripc503ApplicationJSONErrorEnumServiceUnavailable Mripc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Mripc503ApplicationJSONErrorDescriptionEnum string

const (
	Mripc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mripc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Mripc503ApplicationJSON struct {
	Error            *Mripc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mripc504ApplicationJSONErrorEnum string

const (
	Mripc504ApplicationJSONErrorEnumGatewayTimeout Mripc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Mripc504ApplicationJSONErrorDescriptionEnum string

const (
	Mripc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mripc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Mripc504ApplicationJSON struct {
	Error            *Mripc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mripc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type MripcRequest struct {
	Request  *MripcRequestBody `request:"mediaType=application/json"`
	Security MripcSecurity
}

type MripcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Mripc400ApplicationJSONObject *Mripc400ApplicationJSON
	Mripc401ApplicationJSONObject *Mripc401ApplicationJSON
	Mripc404ApplicationJSONObject *Mripc404ApplicationJSON
	Mripc500ApplicationJSONObject *Mripc500ApplicationJSON
	Mripc502ApplicationJSONObject *Mripc502ApplicationJSON
	Mripc503ApplicationJSONObject *Mripc503ApplicationJSON
	Mripc504ApplicationJSONObject *Mripc504ApplicationJSON
}
