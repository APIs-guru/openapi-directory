package operations

import (
	"openapi/pkg/models/shared"
)

type PrcptRequestBodyCertificateParameters struct {
	FullName    string `json:"FullName"`
	PiDob       string `json:"PI_DOB"`
	PiFinYear   string `json:"PI_FIN_YEAR"`
	PiPolicynbr string `json:"PI_POLICYNBR"`
}

type PrcptRequestBodyFormatEnum string

const (
	PrcptRequestBodyFormatEnumPdf PrcptRequestBodyFormatEnum = "pdf"
)

type PrcptRequestBody struct {
	CertificateParameters *PrcptRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PrcptRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PrcptSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Prcpt400ApplicationJSONErrorEnum string

const (
	Prcpt400ApplicationJSONErrorEnumMissingParameter Prcpt400ApplicationJSONErrorEnum = "missing_parameter"
	Prcpt400ApplicationJSONErrorEnumInvalidParameter Prcpt400ApplicationJSONErrorEnum = "invalid_parameter"
	Prcpt400ApplicationJSONErrorEnumInvalidFormat    Prcpt400ApplicationJSONErrorEnum = "invalid_format"
	Prcpt400ApplicationJSONErrorEnumInvalidTxnid     Prcpt400ApplicationJSONErrorEnum = "invalid_txnid"
	Prcpt400ApplicationJSONErrorEnumInvalidConsentid Prcpt400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Prcpt400ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Prcpt400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Prcpt400ApplicationJSONErrorDescriptionEnumBadRequest                              Prcpt400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Prcpt400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Prcpt400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Prcpt400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Prcpt400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Prcpt400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Prcpt400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Prcpt400ApplicationJSON struct {
	Error            *Prcpt400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt401ApplicationJSONErrorEnum string

const (
	Prcpt401ApplicationJSONErrorEnumInvalidAuthentication Prcpt401ApplicationJSONErrorEnum = "invalid_authentication"
	Prcpt401ApplicationJSONErrorEnumInvalidAuthorization  Prcpt401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Prcpt401ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Prcpt401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Prcpt401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Prcpt401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Prcpt401ApplicationJSON struct {
	Error            *Prcpt401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt404ApplicationJSONErrorEnum string

const (
	Prcpt404ApplicationJSONErrorEnumRecordNotFound Prcpt404ApplicationJSONErrorEnum = "record_not_found"
	Prcpt404ApplicationJSONErrorEnumURLNotFound    Prcpt404ApplicationJSONErrorEnum = "url_not_found"
)

type Prcpt404ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt404ApplicationJSONErrorDescriptionEnumNoRecordFound               Prcpt404ApplicationJSONErrorDescriptionEnum = "No record found"
	Prcpt404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Prcpt404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Prcpt404ApplicationJSON struct {
	Error            *Prcpt404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt500ApplicationJSONErrorEnum string

const (
	Prcpt500ApplicationJSONErrorEnumInternalServerError Prcpt500ApplicationJSONErrorEnum = "internal_server_error"
)

type Prcpt500ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt500ApplicationJSONErrorDescriptionEnumInternalServerError Prcpt500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Prcpt500ApplicationJSON struct {
	Error            *Prcpt500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt502ApplicationJSONErrorEnum string

const (
	Prcpt502ApplicationJSONErrorEnumBadGatewy Prcpt502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Prcpt502ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Prcpt502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Prcpt502ApplicationJSON struct {
	Error            *Prcpt502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt503ApplicationJSONErrorEnum string

const (
	Prcpt503ApplicationJSONErrorEnumServiceUnavailable Prcpt503ApplicationJSONErrorEnum = "service_unavailable"
)

type Prcpt503ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Prcpt503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Prcpt503ApplicationJSON struct {
	Error            *Prcpt503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prcpt504ApplicationJSONErrorEnum string

const (
	Prcpt504ApplicationJSONErrorEnumGatewayTimeout Prcpt504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Prcpt504ApplicationJSONErrorDescriptionEnum string

const (
	Prcpt504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Prcpt504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Prcpt504ApplicationJSON struct {
	Error            *Prcpt504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prcpt504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PrcptRequest struct {
	Request  *PrcptRequestBody `request:"mediaType=application/json"`
	Security PrcptSecurity
}

type PrcptResponse struct {
	ContentType                   string
	StatusCode                    int64
	Prcpt400ApplicationJSONObject *Prcpt400ApplicationJSON
	Prcpt401ApplicationJSONObject *Prcpt401ApplicationJSON
	Prcpt404ApplicationJSONObject *Prcpt404ApplicationJSON
	Prcpt500ApplicationJSONObject *Prcpt500ApplicationJSON
	Prcpt502ApplicationJSONObject *Prcpt502ApplicationJSON
	Prcpt503ApplicationJSONObject *Prcpt503ApplicationJSON
	Prcpt504ApplicationJSONObject *Prcpt504ApplicationJSON
}
