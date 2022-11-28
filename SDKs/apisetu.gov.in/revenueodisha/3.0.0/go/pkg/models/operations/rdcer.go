package operations

import (
	"openapi/pkg/models/shared"
)

type RdcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Regdno   string `json:"REGDNO"`
	UID      string `json:"UID"`
}

type RdcerRequestBodyFormatEnum string

const (
	RdcerRequestBodyFormatEnumPdf RdcerRequestBodyFormatEnum = "pdf"
)

type RdcerRequestBody struct {
	CertificateParameters *RdcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RdcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RdcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Rdcer400ApplicationJSONErrorEnum string

const (
	Rdcer400ApplicationJSONErrorEnumMissingParameter Rdcer400ApplicationJSONErrorEnum = "missing_parameter"
	Rdcer400ApplicationJSONErrorEnumInvalidParameter Rdcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Rdcer400ApplicationJSONErrorEnumInvalidFormat    Rdcer400ApplicationJSONErrorEnum = "invalid_format"
	Rdcer400ApplicationJSONErrorEnumInvalidTxnid     Rdcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Rdcer400ApplicationJSONErrorEnumInvalidConsentid Rdcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Rdcer400ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Rdcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Rdcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Rdcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Rdcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Rdcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Rdcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Rdcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Rdcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rdcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Rdcer400ApplicationJSON struct {
	Error            *Rdcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer401ApplicationJSONErrorEnum string

const (
	Rdcer401ApplicationJSONErrorEnumInvalidAuthentication Rdcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Rdcer401ApplicationJSONErrorEnumInvalidAuthorization  Rdcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Rdcer401ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Rdcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Rdcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rdcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Rdcer401ApplicationJSON struct {
	Error            *Rdcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer404ApplicationJSONErrorEnum string

const (
	Rdcer404ApplicationJSONErrorEnumRecordNotFound Rdcer404ApplicationJSONErrorEnum = "record_not_found"
	Rdcer404ApplicationJSONErrorEnumURLNotFound    Rdcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Rdcer404ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Rdcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Rdcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rdcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Rdcer404ApplicationJSON struct {
	Error            *Rdcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer500ApplicationJSONErrorEnum string

const (
	Rdcer500ApplicationJSONErrorEnumInternalServerError Rdcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Rdcer500ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rdcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Rdcer500ApplicationJSON struct {
	Error            *Rdcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer502ApplicationJSONErrorEnum string

const (
	Rdcer502ApplicationJSONErrorEnumBadGatewy Rdcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Rdcer502ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rdcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Rdcer502ApplicationJSON struct {
	Error            *Rdcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer503ApplicationJSONErrorEnum string

const (
	Rdcer503ApplicationJSONErrorEnumServiceUnavailable Rdcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Rdcer503ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rdcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Rdcer503ApplicationJSON struct {
	Error            *Rdcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rdcer504ApplicationJSONErrorEnum string

const (
	Rdcer504ApplicationJSONErrorEnumGatewayTimeout Rdcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Rdcer504ApplicationJSONErrorDescriptionEnum string

const (
	Rdcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rdcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Rdcer504ApplicationJSON struct {
	Error            *Rdcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rdcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RdcerRequest struct {
	Request  *RdcerRequestBody `request:"mediaType=application/json"`
	Security RdcerSecurity
}

type RdcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Rdcer400ApplicationJSONObject *Rdcer400ApplicationJSON
	Rdcer401ApplicationJSONObject *Rdcer401ApplicationJSON
	Rdcer404ApplicationJSONObject *Rdcer404ApplicationJSON
	Rdcer500ApplicationJSONObject *Rdcer500ApplicationJSON
	Rdcer502ApplicationJSONObject *Rdcer502ApplicationJSON
	Rdcer503ApplicationJSONObject *Rdcer503ApplicationJSON
	Rdcer504ApplicationJSONObject *Rdcer504ApplicationJSON
}
