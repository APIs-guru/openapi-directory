package operations

import (
	"openapi/pkg/models/shared"
)

type GicerRequestBodyCertificateParameters struct {
	CustomerID      string `json:"customer_Id"`
	PolicyNumber    string `json:"policy_Number"`
	PolicyStartDate string `json:"policy_StartDate"`
}

type GicerRequestBodyFormatEnum string

const (
	GicerRequestBodyFormatEnumPdf GicerRequestBodyFormatEnum = "pdf"
)

type GicerRequestBody struct {
	CertificateParameters *GicerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                GicerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type GicerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type GicerRequest struct {
	Request  *GicerRequestBody `request:"mediaType=application/json"`
	Security GicerSecurity
}

type Gicer400ApplicationJSONErrorEnum string

const (
	Gicer400ApplicationJSONErrorEnumMissingParameter Gicer400ApplicationJSONErrorEnum = "missing_parameter"
	Gicer400ApplicationJSONErrorEnumInvalidParameter Gicer400ApplicationJSONErrorEnum = "invalid_parameter"
	Gicer400ApplicationJSONErrorEnumInvalidFormat    Gicer400ApplicationJSONErrorEnum = "invalid_format"
	Gicer400ApplicationJSONErrorEnumInvalidTxnid     Gicer400ApplicationJSONErrorEnum = "invalid_txnid"
	Gicer400ApplicationJSONErrorEnumInvalidConsentid Gicer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Gicer400ApplicationJSONErrorDescriptionEnum string

const (
	Gicer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Gicer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Gicer400ApplicationJSONErrorDescriptionEnumBadRequest                              Gicer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Gicer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Gicer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Gicer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Gicer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Gicer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Gicer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Gicer400ApplicationJSON struct {
	Error            *Gicer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer401ApplicationJSONErrorEnum string

const (
	Gicer401ApplicationJSONErrorEnumInvalidAuthentication Gicer401ApplicationJSONErrorEnum = "invalid_authentication"
	Gicer401ApplicationJSONErrorEnumInvalidAuthorization  Gicer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Gicer401ApplicationJSONErrorDescriptionEnum string

const (
	Gicer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Gicer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Gicer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Gicer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Gicer401ApplicationJSON struct {
	Error            *Gicer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer404ApplicationJSONErrorEnum string

const (
	Gicer404ApplicationJSONErrorEnumRecordNotFound Gicer404ApplicationJSONErrorEnum = "record_not_found"
	Gicer404ApplicationJSONErrorEnumURLNotFound    Gicer404ApplicationJSONErrorEnum = "url_not_found"
)

type Gicer404ApplicationJSONErrorDescriptionEnum string

const (
	Gicer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Gicer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Gicer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Gicer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Gicer404ApplicationJSON struct {
	Error            *Gicer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer500ApplicationJSONErrorEnum string

const (
	Gicer500ApplicationJSONErrorEnumInternalServerError Gicer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Gicer500ApplicationJSONErrorDescriptionEnum string

const (
	Gicer500ApplicationJSONErrorDescriptionEnumInternalServerError Gicer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Gicer500ApplicationJSON struct {
	Error            *Gicer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer502ApplicationJSONErrorEnum string

const (
	Gicer502ApplicationJSONErrorEnumBadGatewy Gicer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Gicer502ApplicationJSONErrorDescriptionEnum string

const (
	Gicer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Gicer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Gicer502ApplicationJSON struct {
	Error            *Gicer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer503ApplicationJSONErrorEnum string

const (
	Gicer503ApplicationJSONErrorEnumServiceUnavailable Gicer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Gicer503ApplicationJSONErrorDescriptionEnum string

const (
	Gicer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Gicer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Gicer503ApplicationJSON struct {
	Error            *Gicer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Gicer504ApplicationJSONErrorEnum string

const (
	Gicer504ApplicationJSONErrorEnumGatewayTimeout Gicer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Gicer504ApplicationJSONErrorDescriptionEnum string

const (
	Gicer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Gicer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Gicer504ApplicationJSON struct {
	Error            *Gicer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Gicer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type GicerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Gicer400ApplicationJSONObject *Gicer400ApplicationJSON
	Gicer401ApplicationJSONObject *Gicer401ApplicationJSON
	Gicer404ApplicationJSONObject *Gicer404ApplicationJSON
	Gicer500ApplicationJSONObject *Gicer500ApplicationJSON
	Gicer502ApplicationJSONObject *Gicer502ApplicationJSON
	Gicer503ApplicationJSONObject *Gicer503ApplicationJSON
	Gicer504ApplicationJSONObject *Gicer504ApplicationJSON
}
