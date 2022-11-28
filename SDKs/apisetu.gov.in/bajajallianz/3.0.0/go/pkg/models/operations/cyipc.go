package operations

import (
	"openapi/pkg/models/shared"
)

type CyipcRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	PolicyNumber string `json:"policy_number"`
}

type CyipcRequestBodyFormatEnum string

const (
	CyipcRequestBodyFormatEnumPdf CyipcRequestBodyFormatEnum = "pdf"
)

type CyipcRequestBody struct {
	CertificateParameters *CyipcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CyipcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CyipcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Cyipc400ApplicationJSONErrorEnum string

const (
	Cyipc400ApplicationJSONErrorEnumMissingParameter Cyipc400ApplicationJSONErrorEnum = "missing_parameter"
	Cyipc400ApplicationJSONErrorEnumInvalidParameter Cyipc400ApplicationJSONErrorEnum = "invalid_parameter"
	Cyipc400ApplicationJSONErrorEnumInvalidFormat    Cyipc400ApplicationJSONErrorEnum = "invalid_format"
	Cyipc400ApplicationJSONErrorEnumInvalidTxnid     Cyipc400ApplicationJSONErrorEnum = "invalid_txnid"
	Cyipc400ApplicationJSONErrorEnumInvalidConsentid Cyipc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cyipc400ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cyipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cyipc400ApplicationJSONErrorDescriptionEnumBadRequest                              Cyipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cyipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cyipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cyipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cyipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cyipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cyipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cyipc400ApplicationJSON struct {
	Error            *Cyipc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc401ApplicationJSONErrorEnum string

const (
	Cyipc401ApplicationJSONErrorEnumInvalidAuthentication Cyipc401ApplicationJSONErrorEnum = "invalid_authentication"
	Cyipc401ApplicationJSONErrorEnumInvalidAuthorization  Cyipc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cyipc401ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cyipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cyipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cyipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cyipc401ApplicationJSON struct {
	Error            *Cyipc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc404ApplicationJSONErrorEnum string

const (
	Cyipc404ApplicationJSONErrorEnumRecordNotFound Cyipc404ApplicationJSONErrorEnum = "record_not_found"
	Cyipc404ApplicationJSONErrorEnumURLNotFound    Cyipc404ApplicationJSONErrorEnum = "url_not_found"
)

type Cyipc404ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cyipc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cyipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cyipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cyipc404ApplicationJSON struct {
	Error            *Cyipc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc500ApplicationJSONErrorEnum string

const (
	Cyipc500ApplicationJSONErrorEnumInternalServerError Cyipc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cyipc500ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc500ApplicationJSONErrorDescriptionEnumInternalServerError Cyipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cyipc500ApplicationJSON struct {
	Error            *Cyipc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc502ApplicationJSONErrorEnum string

const (
	Cyipc502ApplicationJSONErrorEnumBadGatewy Cyipc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cyipc502ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cyipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cyipc502ApplicationJSON struct {
	Error            *Cyipc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc503ApplicationJSONErrorEnum string

const (
	Cyipc503ApplicationJSONErrorEnumServiceUnavailable Cyipc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cyipc503ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cyipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cyipc503ApplicationJSON struct {
	Error            *Cyipc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cyipc504ApplicationJSONErrorEnum string

const (
	Cyipc504ApplicationJSONErrorEnumGatewayTimeout Cyipc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cyipc504ApplicationJSONErrorDescriptionEnum string

const (
	Cyipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cyipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cyipc504ApplicationJSON struct {
	Error            *Cyipc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cyipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CyipcRequest struct {
	Request  *CyipcRequestBody `request:"mediaType=application/json"`
	Security CyipcSecurity
}

type CyipcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cyipc400ApplicationJSONObject *Cyipc400ApplicationJSON
	Cyipc401ApplicationJSONObject *Cyipc401ApplicationJSON
	Cyipc404ApplicationJSONObject *Cyipc404ApplicationJSON
	Cyipc500ApplicationJSONObject *Cyipc500ApplicationJSON
	Cyipc502ApplicationJSONObject *Cyipc502ApplicationJSON
	Cyipc503ApplicationJSONObject *Cyipc503ApplicationJSON
	Cyipc504ApplicationJSONObject *Cyipc504ApplicationJSON
}
