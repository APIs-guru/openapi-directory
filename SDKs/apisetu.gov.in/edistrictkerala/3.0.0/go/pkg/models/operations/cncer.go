package operations

import (
	"openapi/pkg/models/shared"
)

type CncerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type CncerRequestBodyFormatEnum string

const (
	CncerRequestBodyFormatEnumPdf CncerRequestBodyFormatEnum = "pdf"
)

type CncerRequestBody struct {
	CertificateParameters *CncerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CncerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CncerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Cncer400ApplicationJSONErrorEnum string

const (
	Cncer400ApplicationJSONErrorEnumMissingParameter Cncer400ApplicationJSONErrorEnum = "missing_parameter"
	Cncer400ApplicationJSONErrorEnumInvalidParameter Cncer400ApplicationJSONErrorEnum = "invalid_parameter"
	Cncer400ApplicationJSONErrorEnumInvalidFormat    Cncer400ApplicationJSONErrorEnum = "invalid_format"
	Cncer400ApplicationJSONErrorEnumInvalidTxnid     Cncer400ApplicationJSONErrorEnum = "invalid_txnid"
	Cncer400ApplicationJSONErrorEnumInvalidConsentid Cncer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cncer400ApplicationJSONErrorDescriptionEnum string

const (
	Cncer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cncer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cncer400ApplicationJSONErrorDescriptionEnumBadRequest                              Cncer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cncer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cncer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cncer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cncer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cncer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cncer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cncer400ApplicationJSON struct {
	Error            *Cncer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer401ApplicationJSONErrorEnum string

const (
	Cncer401ApplicationJSONErrorEnumInvalidAuthentication Cncer401ApplicationJSONErrorEnum = "invalid_authentication"
	Cncer401ApplicationJSONErrorEnumInvalidAuthorization  Cncer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cncer401ApplicationJSONErrorDescriptionEnum string

const (
	Cncer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cncer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cncer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cncer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cncer401ApplicationJSON struct {
	Error            *Cncer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer404ApplicationJSONErrorEnum string

const (
	Cncer404ApplicationJSONErrorEnumRecordNotFound Cncer404ApplicationJSONErrorEnum = "record_not_found"
	Cncer404ApplicationJSONErrorEnumURLNotFound    Cncer404ApplicationJSONErrorEnum = "url_not_found"
)

type Cncer404ApplicationJSONErrorDescriptionEnum string

const (
	Cncer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cncer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cncer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cncer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cncer404ApplicationJSON struct {
	Error            *Cncer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer500ApplicationJSONErrorEnum string

const (
	Cncer500ApplicationJSONErrorEnumInternalServerError Cncer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cncer500ApplicationJSONErrorDescriptionEnum string

const (
	Cncer500ApplicationJSONErrorDescriptionEnumInternalServerError Cncer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cncer500ApplicationJSON struct {
	Error            *Cncer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer502ApplicationJSONErrorEnum string

const (
	Cncer502ApplicationJSONErrorEnumBadGatewy Cncer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cncer502ApplicationJSONErrorDescriptionEnum string

const (
	Cncer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cncer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cncer502ApplicationJSON struct {
	Error            *Cncer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer503ApplicationJSONErrorEnum string

const (
	Cncer503ApplicationJSONErrorEnumServiceUnavailable Cncer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cncer503ApplicationJSONErrorDescriptionEnum string

const (
	Cncer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cncer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cncer503ApplicationJSON struct {
	Error            *Cncer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cncer504ApplicationJSONErrorEnum string

const (
	Cncer504ApplicationJSONErrorEnumGatewayTimeout Cncer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cncer504ApplicationJSONErrorDescriptionEnum string

const (
	Cncer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cncer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cncer504ApplicationJSON struct {
	Error            *Cncer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cncer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CncerRequest struct {
	Request  *CncerRequestBody `request:"mediaType=application/json"`
	Security CncerSecurity
}

type CncerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cncer400ApplicationJSONObject *Cncer400ApplicationJSON
	Cncer401ApplicationJSONObject *Cncer401ApplicationJSON
	Cncer404ApplicationJSONObject *Cncer404ApplicationJSON
	Cncer500ApplicationJSONObject *Cncer500ApplicationJSON
	Cncer502ApplicationJSONObject *Cncer502ApplicationJSON
	Cncer503ApplicationJSONObject *Cncer503ApplicationJSON
	Cncer504ApplicationJSONObject *Cncer504ApplicationJSON
}
