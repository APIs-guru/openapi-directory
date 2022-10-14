package operations

import (
	"openapi/pkg/models/shared"
)

type IdcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type IdcerRequestBodyFormatEnum string

const (
	IdcerRequestBodyFormatEnumPdf IdcerRequestBodyFormatEnum = "pdf"
)

type IdcerRequestBody struct {
	CertificateParameters *IdcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                IdcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type IdcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type IdcerRequest struct {
	Request  *IdcerRequestBody `request:"mediaType=application/json"`
	Security IdcerSecurity
}

type Idcer400ApplicationJSONErrorEnum string

const (
	Idcer400ApplicationJSONErrorEnumMissingParameter Idcer400ApplicationJSONErrorEnum = "missing_parameter"
	Idcer400ApplicationJSONErrorEnumInvalidParameter Idcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Idcer400ApplicationJSONErrorEnumInvalidFormat    Idcer400ApplicationJSONErrorEnum = "invalid_format"
	Idcer400ApplicationJSONErrorEnumInvalidTxnid     Idcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Idcer400ApplicationJSONErrorEnumInvalidConsentid Idcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Idcer400ApplicationJSONErrorDescriptionEnum string

const (
	Idcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Idcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Idcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Idcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Idcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Idcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Idcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Idcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Idcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Idcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Idcer400ApplicationJSON struct {
	Error            *Idcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer401ApplicationJSONErrorEnum string

const (
	Idcer401ApplicationJSONErrorEnumInvalidAuthentication Idcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Idcer401ApplicationJSONErrorEnumInvalidAuthorization  Idcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Idcer401ApplicationJSONErrorDescriptionEnum string

const (
	Idcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Idcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Idcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Idcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Idcer401ApplicationJSON struct {
	Error            *Idcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer404ApplicationJSONErrorEnum string

const (
	Idcer404ApplicationJSONErrorEnumRecordNotFound Idcer404ApplicationJSONErrorEnum = "record_not_found"
	Idcer404ApplicationJSONErrorEnumURLNotFound    Idcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Idcer404ApplicationJSONErrorDescriptionEnum string

const (
	Idcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Idcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Idcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Idcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Idcer404ApplicationJSON struct {
	Error            *Idcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer500ApplicationJSONErrorEnum string

const (
	Idcer500ApplicationJSONErrorEnumInternalServerError Idcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Idcer500ApplicationJSONErrorDescriptionEnum string

const (
	Idcer500ApplicationJSONErrorDescriptionEnumInternalServerError Idcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Idcer500ApplicationJSON struct {
	Error            *Idcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer502ApplicationJSONErrorEnum string

const (
	Idcer502ApplicationJSONErrorEnumBadGatewy Idcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Idcer502ApplicationJSONErrorDescriptionEnum string

const (
	Idcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Idcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Idcer502ApplicationJSON struct {
	Error            *Idcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer503ApplicationJSONErrorEnum string

const (
	Idcer503ApplicationJSONErrorEnumServiceUnavailable Idcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Idcer503ApplicationJSONErrorDescriptionEnum string

const (
	Idcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Idcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Idcer503ApplicationJSON struct {
	Error            *Idcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Idcer504ApplicationJSONErrorEnum string

const (
	Idcer504ApplicationJSONErrorEnumGatewayTimeout Idcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Idcer504ApplicationJSONErrorDescriptionEnum string

const (
	Idcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Idcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Idcer504ApplicationJSON struct {
	Error            *Idcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Idcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type IdcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Idcer400ApplicationJSONObject *Idcer400ApplicationJSON
	Idcer401ApplicationJSONObject *Idcer401ApplicationJSON
	Idcer404ApplicationJSONObject *Idcer404ApplicationJSON
	Idcer500ApplicationJSONObject *Idcer500ApplicationJSON
	Idcer502ApplicationJSONObject *Idcer502ApplicationJSON
	Idcer503ApplicationJSONObject *Idcer503ApplicationJSON
	Idcer504ApplicationJSONObject *Idcer504ApplicationJSON
}
