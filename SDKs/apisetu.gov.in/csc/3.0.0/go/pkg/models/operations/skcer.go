package operations

import (
	"openapi/pkg/models/shared"
)

type SkcerRequestBodyCertificateParameters struct {
	FullName        string `json:"FullName"`
	CertificateType string `json:"certificateType"`
	Username        string `json:"username"`
}

type SkcerRequestBodyFormatEnum string

const (
	SkcerRequestBodyFormatEnumPdf SkcerRequestBodyFormatEnum = "pdf"
)

type SkcerRequestBody struct {
	CertificateParameters *SkcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SkcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SkcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Skcer400ApplicationJSONErrorEnum string

const (
	Skcer400ApplicationJSONErrorEnumMissingParameter Skcer400ApplicationJSONErrorEnum = "missing_parameter"
	Skcer400ApplicationJSONErrorEnumInvalidParameter Skcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Skcer400ApplicationJSONErrorEnumInvalidFormat    Skcer400ApplicationJSONErrorEnum = "invalid_format"
	Skcer400ApplicationJSONErrorEnumInvalidTxnid     Skcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Skcer400ApplicationJSONErrorEnumInvalidConsentid Skcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Skcer400ApplicationJSONErrorDescriptionEnum string

const (
	Skcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Skcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Skcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Skcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Skcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Skcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Skcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Skcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Skcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Skcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Skcer400ApplicationJSON struct {
	Error            *Skcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer401ApplicationJSONErrorEnum string

const (
	Skcer401ApplicationJSONErrorEnumInvalidAuthentication Skcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Skcer401ApplicationJSONErrorEnumInvalidAuthorization  Skcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Skcer401ApplicationJSONErrorDescriptionEnum string

const (
	Skcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Skcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Skcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Skcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Skcer401ApplicationJSON struct {
	Error            *Skcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer404ApplicationJSONErrorEnum string

const (
	Skcer404ApplicationJSONErrorEnumRecordNotFound Skcer404ApplicationJSONErrorEnum = "record_not_found"
	Skcer404ApplicationJSONErrorEnumURLNotFound    Skcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Skcer404ApplicationJSONErrorDescriptionEnum string

const (
	Skcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Skcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Skcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Skcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Skcer404ApplicationJSON struct {
	Error            *Skcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer500ApplicationJSONErrorEnum string

const (
	Skcer500ApplicationJSONErrorEnumInternalServerError Skcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Skcer500ApplicationJSONErrorDescriptionEnum string

const (
	Skcer500ApplicationJSONErrorDescriptionEnumInternalServerError Skcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Skcer500ApplicationJSON struct {
	Error            *Skcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer502ApplicationJSONErrorEnum string

const (
	Skcer502ApplicationJSONErrorEnumBadGatewy Skcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Skcer502ApplicationJSONErrorDescriptionEnum string

const (
	Skcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Skcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Skcer502ApplicationJSON struct {
	Error            *Skcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer503ApplicationJSONErrorEnum string

const (
	Skcer503ApplicationJSONErrorEnumServiceUnavailable Skcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Skcer503ApplicationJSONErrorDescriptionEnum string

const (
	Skcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Skcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Skcer503ApplicationJSON struct {
	Error            *Skcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skcer504ApplicationJSONErrorEnum string

const (
	Skcer504ApplicationJSONErrorEnumGatewayTimeout Skcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Skcer504ApplicationJSONErrorDescriptionEnum string

const (
	Skcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Skcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Skcer504ApplicationJSON struct {
	Error            *Skcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SkcerRequest struct {
	Request  *SkcerRequestBody `request:"mediaType=application/json"`
	Security SkcerSecurity
}

type SkcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Skcer400ApplicationJSONObject *Skcer400ApplicationJSON
	Skcer401ApplicationJSONObject *Skcer401ApplicationJSON
	Skcer404ApplicationJSONObject *Skcer404ApplicationJSON
	Skcer500ApplicationJSONObject *Skcer500ApplicationJSON
	Skcer502ApplicationJSONObject *Skcer502ApplicationJSON
	Skcer503ApplicationJSONObject *Skcer503ApplicationJSON
	Skcer504ApplicationJSONObject *Skcer504ApplicationJSON
}
