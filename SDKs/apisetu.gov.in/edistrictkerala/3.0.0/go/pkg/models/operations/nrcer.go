package operations

import (
	"openapi/pkg/models/shared"
)

type NrcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type NrcerRequestBodyFormatEnum string

const (
	NrcerRequestBodyFormatEnumPdf NrcerRequestBodyFormatEnum = "pdf"
)

type NrcerRequestBody struct {
	CertificateParameters *NrcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NrcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NrcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Nrcer400ApplicationJSONErrorEnum string

const (
	Nrcer400ApplicationJSONErrorEnumMissingParameter Nrcer400ApplicationJSONErrorEnum = "missing_parameter"
	Nrcer400ApplicationJSONErrorEnumInvalidParameter Nrcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Nrcer400ApplicationJSONErrorEnumInvalidFormat    Nrcer400ApplicationJSONErrorEnum = "invalid_format"
	Nrcer400ApplicationJSONErrorEnumInvalidTxnid     Nrcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Nrcer400ApplicationJSONErrorEnumInvalidConsentid Nrcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nrcer400ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nrcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nrcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Nrcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nrcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nrcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nrcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nrcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nrcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nrcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nrcer400ApplicationJSON struct {
	Error            *Nrcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer401ApplicationJSONErrorEnum string

const (
	Nrcer401ApplicationJSONErrorEnumInvalidAuthentication Nrcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Nrcer401ApplicationJSONErrorEnumInvalidAuthorization  Nrcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nrcer401ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nrcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nrcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nrcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nrcer401ApplicationJSON struct {
	Error            *Nrcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer404ApplicationJSONErrorEnum string

const (
	Nrcer404ApplicationJSONErrorEnumRecordNotFound Nrcer404ApplicationJSONErrorEnum = "record_not_found"
	Nrcer404ApplicationJSONErrorEnumURLNotFound    Nrcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Nrcer404ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nrcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nrcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nrcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nrcer404ApplicationJSON struct {
	Error            *Nrcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer500ApplicationJSONErrorEnum string

const (
	Nrcer500ApplicationJSONErrorEnumInternalServerError Nrcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nrcer500ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer500ApplicationJSONErrorDescriptionEnumInternalServerError Nrcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nrcer500ApplicationJSON struct {
	Error            *Nrcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer502ApplicationJSONErrorEnum string

const (
	Nrcer502ApplicationJSONErrorEnumBadGatewy Nrcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nrcer502ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nrcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nrcer502ApplicationJSON struct {
	Error            *Nrcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer503ApplicationJSONErrorEnum string

const (
	Nrcer503ApplicationJSONErrorEnumServiceUnavailable Nrcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nrcer503ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nrcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nrcer503ApplicationJSON struct {
	Error            *Nrcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nrcer504ApplicationJSONErrorEnum string

const (
	Nrcer504ApplicationJSONErrorEnumGatewayTimeout Nrcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nrcer504ApplicationJSONErrorDescriptionEnum string

const (
	Nrcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nrcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nrcer504ApplicationJSON struct {
	Error            *Nrcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nrcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NrcerRequest struct {
	Request  *NrcerRequestBody `request:"mediaType=application/json"`
	Security NrcerSecurity
}

type NrcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nrcer400ApplicationJSONObject *Nrcer400ApplicationJSON
	Nrcer401ApplicationJSONObject *Nrcer401ApplicationJSON
	Nrcer404ApplicationJSONObject *Nrcer404ApplicationJSON
	Nrcer500ApplicationJSONObject *Nrcer500ApplicationJSON
	Nrcer502ApplicationJSONObject *Nrcer502ApplicationJSON
	Nrcer503ApplicationJSONObject *Nrcer503ApplicationJSON
	Nrcer504ApplicationJSONObject *Nrcer504ApplicationJSON
}
