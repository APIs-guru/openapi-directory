package operations

import (
	"openapi/pkg/models/shared"
)

type DscerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type DscerRequestBodyFormatEnum string

const (
	DscerRequestBodyFormatEnumPdf DscerRequestBodyFormatEnum = "pdf"
)

type DscerRequestBody struct {
	CertificateParameters *DscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DscerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DscerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DscerRequest struct {
	Request  *DscerRequestBody `request:"mediaType=application/json"`
	Security DscerSecurity
}

type Dscer400ApplicationJSONErrorEnum string

const (
	Dscer400ApplicationJSONErrorEnumMissingParameter Dscer400ApplicationJSONErrorEnum = "missing_parameter"
	Dscer400ApplicationJSONErrorEnumInvalidParameter Dscer400ApplicationJSONErrorEnum = "invalid_parameter"
	Dscer400ApplicationJSONErrorEnumInvalidFormat    Dscer400ApplicationJSONErrorEnum = "invalid_format"
	Dscer400ApplicationJSONErrorEnumInvalidTxnid     Dscer400ApplicationJSONErrorEnum = "invalid_txnid"
	Dscer400ApplicationJSONErrorEnumInvalidConsentid Dscer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dscer400ApplicationJSONErrorDescriptionEnum string

const (
	Dscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dscer400ApplicationJSONErrorDescriptionEnumBadRequest                              Dscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dscer400ApplicationJSON struct {
	Error            *Dscer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer401ApplicationJSONErrorEnum string

const (
	Dscer401ApplicationJSONErrorEnumInvalidAuthentication Dscer401ApplicationJSONErrorEnum = "invalid_authentication"
	Dscer401ApplicationJSONErrorEnumInvalidAuthorization  Dscer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dscer401ApplicationJSONErrorDescriptionEnum string

const (
	Dscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dscer401ApplicationJSON struct {
	Error            *Dscer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer404ApplicationJSONErrorEnum string

const (
	Dscer404ApplicationJSONErrorEnumRecordNotFound Dscer404ApplicationJSONErrorEnum = "record_not_found"
	Dscer404ApplicationJSONErrorEnumURLNotFound    Dscer404ApplicationJSONErrorEnum = "url_not_found"
)

type Dscer404ApplicationJSONErrorDescriptionEnum string

const (
	Dscer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dscer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dscer404ApplicationJSON struct {
	Error            *Dscer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer500ApplicationJSONErrorEnum string

const (
	Dscer500ApplicationJSONErrorEnumInternalServerError Dscer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dscer500ApplicationJSONErrorDescriptionEnum string

const (
	Dscer500ApplicationJSONErrorDescriptionEnumInternalServerError Dscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dscer500ApplicationJSON struct {
	Error            *Dscer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer502ApplicationJSONErrorEnum string

const (
	Dscer502ApplicationJSONErrorEnumBadGatewy Dscer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dscer502ApplicationJSONErrorDescriptionEnum string

const (
	Dscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dscer502ApplicationJSON struct {
	Error            *Dscer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer503ApplicationJSONErrorEnum string

const (
	Dscer503ApplicationJSONErrorEnumServiceUnavailable Dscer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dscer503ApplicationJSONErrorDescriptionEnum string

const (
	Dscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dscer503ApplicationJSON struct {
	Error            *Dscer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dscer504ApplicationJSONErrorEnum string

const (
	Dscer504ApplicationJSONErrorEnumGatewayTimeout Dscer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dscer504ApplicationJSONErrorDescriptionEnum string

const (
	Dscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dscer504ApplicationJSON struct {
	Error            *Dscer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DscerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dscer400ApplicationJSONObject *Dscer400ApplicationJSON
	Dscer401ApplicationJSONObject *Dscer401ApplicationJSON
	Dscer404ApplicationJSONObject *Dscer404ApplicationJSON
	Dscer500ApplicationJSONObject *Dscer500ApplicationJSON
	Dscer502ApplicationJSONObject *Dscer502ApplicationJSON
	Dscer503ApplicationJSONObject *Dscer503ApplicationJSON
	Dscer504ApplicationJSONObject *Dscer504ApplicationJSON
}
