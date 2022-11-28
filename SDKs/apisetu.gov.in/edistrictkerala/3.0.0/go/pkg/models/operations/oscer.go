package operations

import (
	"openapi/pkg/models/shared"
)

type OscerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type OscerRequestBodyFormatEnum string

const (
	OscerRequestBodyFormatEnumPdf OscerRequestBodyFormatEnum = "pdf"
)

type OscerRequestBody struct {
	CertificateParameters *OscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                OscerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type OscerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Oscer400ApplicationJSONErrorEnum string

const (
	Oscer400ApplicationJSONErrorEnumMissingParameter Oscer400ApplicationJSONErrorEnum = "missing_parameter"
	Oscer400ApplicationJSONErrorEnumInvalidParameter Oscer400ApplicationJSONErrorEnum = "invalid_parameter"
	Oscer400ApplicationJSONErrorEnumInvalidFormat    Oscer400ApplicationJSONErrorEnum = "invalid_format"
	Oscer400ApplicationJSONErrorEnumInvalidTxnid     Oscer400ApplicationJSONErrorEnum = "invalid_txnid"
	Oscer400ApplicationJSONErrorEnumInvalidConsentid Oscer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Oscer400ApplicationJSONErrorDescriptionEnum string

const (
	Oscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Oscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Oscer400ApplicationJSONErrorDescriptionEnumBadRequest                              Oscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Oscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Oscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Oscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Oscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Oscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Oscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Oscer400ApplicationJSON struct {
	Error            *Oscer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer401ApplicationJSONErrorEnum string

const (
	Oscer401ApplicationJSONErrorEnumInvalidAuthentication Oscer401ApplicationJSONErrorEnum = "invalid_authentication"
	Oscer401ApplicationJSONErrorEnumInvalidAuthorization  Oscer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Oscer401ApplicationJSONErrorDescriptionEnum string

const (
	Oscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Oscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Oscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Oscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Oscer401ApplicationJSON struct {
	Error            *Oscer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer404ApplicationJSONErrorEnum string

const (
	Oscer404ApplicationJSONErrorEnumRecordNotFound Oscer404ApplicationJSONErrorEnum = "record_not_found"
	Oscer404ApplicationJSONErrorEnumURLNotFound    Oscer404ApplicationJSONErrorEnum = "url_not_found"
)

type Oscer404ApplicationJSONErrorDescriptionEnum string

const (
	Oscer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Oscer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Oscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Oscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Oscer404ApplicationJSON struct {
	Error            *Oscer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer500ApplicationJSONErrorEnum string

const (
	Oscer500ApplicationJSONErrorEnumInternalServerError Oscer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Oscer500ApplicationJSONErrorDescriptionEnum string

const (
	Oscer500ApplicationJSONErrorDescriptionEnumInternalServerError Oscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Oscer500ApplicationJSON struct {
	Error            *Oscer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer502ApplicationJSONErrorEnum string

const (
	Oscer502ApplicationJSONErrorEnumBadGatewy Oscer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Oscer502ApplicationJSONErrorDescriptionEnum string

const (
	Oscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Oscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Oscer502ApplicationJSON struct {
	Error            *Oscer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer503ApplicationJSONErrorEnum string

const (
	Oscer503ApplicationJSONErrorEnumServiceUnavailable Oscer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Oscer503ApplicationJSONErrorDescriptionEnum string

const (
	Oscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Oscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Oscer503ApplicationJSON struct {
	Error            *Oscer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Oscer504ApplicationJSONErrorEnum string

const (
	Oscer504ApplicationJSONErrorEnumGatewayTimeout Oscer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Oscer504ApplicationJSONErrorDescriptionEnum string

const (
	Oscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Oscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Oscer504ApplicationJSON struct {
	Error            *Oscer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Oscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type OscerRequest struct {
	Request  *OscerRequestBody `request:"mediaType=application/json"`
	Security OscerSecurity
}

type OscerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Oscer400ApplicationJSONObject *Oscer400ApplicationJSON
	Oscer401ApplicationJSONObject *Oscer401ApplicationJSON
	Oscer404ApplicationJSONObject *Oscer404ApplicationJSON
	Oscer500ApplicationJSONObject *Oscer500ApplicationJSON
	Oscer502ApplicationJSONObject *Oscer502ApplicationJSON
	Oscer503ApplicationJSONObject *Oscer503ApplicationJSON
	Oscer504ApplicationJSONObject *Oscer504ApplicationJSON
}
