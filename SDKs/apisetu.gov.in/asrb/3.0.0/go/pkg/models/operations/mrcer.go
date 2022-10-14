package operations

import (
	"openapi/pkg/models/shared"
)

type MrcerRequestBodyCertificateParameters struct {
	CertType string `json:"CERT_TYPE"`
	FullName string `json:"FullName"`
	Rroll    string `json:"RROLL"`
}

type MrcerRequestBodyFormatEnum string

const (
	MrcerRequestBodyFormatEnumPdf MrcerRequestBodyFormatEnum = "pdf"
)

type MrcerRequestBody struct {
	CertificateParameters *MrcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                MrcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type MrcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type MrcerRequest struct {
	Request  *MrcerRequestBody `request:"mediaType=application/json"`
	Security MrcerSecurity
}

type Mrcer400ApplicationJSONErrorEnum string

const (
	Mrcer400ApplicationJSONErrorEnumMissingParameter Mrcer400ApplicationJSONErrorEnum = "missing_parameter"
	Mrcer400ApplicationJSONErrorEnumInvalidParameter Mrcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Mrcer400ApplicationJSONErrorEnumInvalidFormat    Mrcer400ApplicationJSONErrorEnum = "invalid_format"
	Mrcer400ApplicationJSONErrorEnumInvalidTxnid     Mrcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Mrcer400ApplicationJSONErrorEnumInvalidConsentid Mrcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Mrcer400ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Mrcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Mrcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Mrcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Mrcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Mrcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Mrcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Mrcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Mrcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mrcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Mrcer400ApplicationJSON struct {
	Error            *Mrcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer401ApplicationJSONErrorEnum string

const (
	Mrcer401ApplicationJSONErrorEnumInvalidAuthentication Mrcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Mrcer401ApplicationJSONErrorEnumInvalidAuthorization  Mrcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Mrcer401ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Mrcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Mrcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mrcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Mrcer401ApplicationJSON struct {
	Error            *Mrcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer404ApplicationJSONErrorEnum string

const (
	Mrcer404ApplicationJSONErrorEnumRecordNotFound Mrcer404ApplicationJSONErrorEnum = "record_not_found"
	Mrcer404ApplicationJSONErrorEnumURLNotFound    Mrcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Mrcer404ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Mrcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Mrcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mrcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Mrcer404ApplicationJSON struct {
	Error            *Mrcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer500ApplicationJSONErrorEnum string

const (
	Mrcer500ApplicationJSONErrorEnumInternalServerError Mrcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Mrcer500ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer500ApplicationJSONErrorDescriptionEnumInternalServerError Mrcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Mrcer500ApplicationJSON struct {
	Error            *Mrcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer502ApplicationJSONErrorEnum string

const (
	Mrcer502ApplicationJSONErrorEnumBadGatewy Mrcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Mrcer502ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mrcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Mrcer502ApplicationJSON struct {
	Error            *Mrcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer503ApplicationJSONErrorEnum string

const (
	Mrcer503ApplicationJSONErrorEnumServiceUnavailable Mrcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Mrcer503ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mrcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Mrcer503ApplicationJSON struct {
	Error            *Mrcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Mrcer504ApplicationJSONErrorEnum string

const (
	Mrcer504ApplicationJSONErrorEnumGatewayTimeout Mrcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Mrcer504ApplicationJSONErrorDescriptionEnum string

const (
	Mrcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mrcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Mrcer504ApplicationJSON struct {
	Error            *Mrcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Mrcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type MrcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Mrcer400ApplicationJSONObject *Mrcer400ApplicationJSON
	Mrcer401ApplicationJSONObject *Mrcer401ApplicationJSON
	Mrcer404ApplicationJSONObject *Mrcer404ApplicationJSON
	Mrcer500ApplicationJSONObject *Mrcer500ApplicationJSON
	Mrcer502ApplicationJSONObject *Mrcer502ApplicationJSON
	Mrcer503ApplicationJSONObject *Mrcer503ApplicationJSON
	Mrcer504ApplicationJSONObject *Mrcer504ApplicationJSON
}
