package operations

import (
	"openapi/pkg/models/shared"
)

type SscerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollcode string `json:"rollcode"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type SscerRequestBodyFormatEnum string

const (
	SscerRequestBodyFormatEnumPdf SscerRequestBodyFormatEnum = "pdf"
)

type SscerRequestBody struct {
	CertificateParameters *SscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SscerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SscerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Sscer400ApplicationJSONErrorEnum string

const (
	Sscer400ApplicationJSONErrorEnumMissingParameter Sscer400ApplicationJSONErrorEnum = "missing_parameter"
	Sscer400ApplicationJSONErrorEnumInvalidParameter Sscer400ApplicationJSONErrorEnum = "invalid_parameter"
	Sscer400ApplicationJSONErrorEnumInvalidFormat    Sscer400ApplicationJSONErrorEnum = "invalid_format"
	Sscer400ApplicationJSONErrorEnumInvalidTxnid     Sscer400ApplicationJSONErrorEnum = "invalid_txnid"
	Sscer400ApplicationJSONErrorEnumInvalidConsentid Sscer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Sscer400ApplicationJSONErrorDescriptionEnum string

const (
	Sscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Sscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Sscer400ApplicationJSONErrorDescriptionEnumBadRequest                              Sscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Sscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Sscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Sscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Sscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Sscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Sscer400ApplicationJSON struct {
	Error            *Sscer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer401ApplicationJSONErrorEnum string

const (
	Sscer401ApplicationJSONErrorEnumInvalidAuthentication Sscer401ApplicationJSONErrorEnum = "invalid_authentication"
	Sscer401ApplicationJSONErrorEnumInvalidAuthorization  Sscer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Sscer401ApplicationJSONErrorDescriptionEnum string

const (
	Sscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Sscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Sscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Sscer401ApplicationJSON struct {
	Error            *Sscer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer404ApplicationJSONErrorEnum string

const (
	Sscer404ApplicationJSONErrorEnumRecordNotFound Sscer404ApplicationJSONErrorEnum = "record_not_found"
	Sscer404ApplicationJSONErrorEnumURLNotFound    Sscer404ApplicationJSONErrorEnum = "url_not_found"
)

type Sscer404ApplicationJSONErrorDescriptionEnum string

const (
	Sscer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Sscer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Sscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Sscer404ApplicationJSON struct {
	Error            *Sscer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer500ApplicationJSONErrorEnum string

const (
	Sscer500ApplicationJSONErrorEnumInternalServerError Sscer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Sscer500ApplicationJSONErrorDescriptionEnum string

const (
	Sscer500ApplicationJSONErrorDescriptionEnumInternalServerError Sscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Sscer500ApplicationJSON struct {
	Error            *Sscer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer502ApplicationJSONErrorEnum string

const (
	Sscer502ApplicationJSONErrorEnumBadGatewy Sscer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Sscer502ApplicationJSONErrorDescriptionEnum string

const (
	Sscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Sscer502ApplicationJSON struct {
	Error            *Sscer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer503ApplicationJSONErrorEnum string

const (
	Sscer503ApplicationJSONErrorEnumServiceUnavailable Sscer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Sscer503ApplicationJSONErrorDescriptionEnum string

const (
	Sscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Sscer503ApplicationJSON struct {
	Error            *Sscer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Sscer504ApplicationJSONErrorEnum string

const (
	Sscer504ApplicationJSONErrorEnumGatewayTimeout Sscer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Sscer504ApplicationJSONErrorDescriptionEnum string

const (
	Sscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Sscer504ApplicationJSON struct {
	Error            *Sscer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Sscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SscerRequest struct {
	Request  *SscerRequestBody `request:"mediaType=application/json"`
	Security SscerSecurity
}

type SscerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Sscer400ApplicationJSONObject *Sscer400ApplicationJSON
	Sscer401ApplicationJSONObject *Sscer401ApplicationJSON
	Sscer404ApplicationJSONObject *Sscer404ApplicationJSON
	Sscer500ApplicationJSONObject *Sscer500ApplicationJSON
	Sscer502ApplicationJSONObject *Sscer502ApplicationJSON
	Sscer503ApplicationJSONObject *Sscer503ApplicationJSON
	Sscer504ApplicationJSONObject *Sscer504ApplicationJSON
}
