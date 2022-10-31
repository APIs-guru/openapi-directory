package operations

import (
	"openapi/pkg/models/shared"
)

type LabrpRequestBodyCertificateParameters struct {
	Dob        string `json:"DOB"`
	FullName   string `json:"FullName"`
	Gender     string `json:"GENDER"`
	MobileNoRq string `json:"MobileNoRQ"`
}

type LabrpRequestBodyFormatEnum string

const (
	LabrpRequestBodyFormatEnumPdf LabrpRequestBodyFormatEnum = "pdf"
)

type LabrpRequestBody struct {
	CertificateParameters *LabrpRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                LabrpRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LabrpSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LabrpRequest struct {
	Request  *LabrpRequestBody `request:"mediaType=application/json"`
	Security LabrpSecurity
}

type Labrp400ApplicationJSONErrorEnum string

const (
	Labrp400ApplicationJSONErrorEnumMissingParameter Labrp400ApplicationJSONErrorEnum = "missing_parameter"
	Labrp400ApplicationJSONErrorEnumInvalidParameter Labrp400ApplicationJSONErrorEnum = "invalid_parameter"
	Labrp400ApplicationJSONErrorEnumInvalidFormat    Labrp400ApplicationJSONErrorEnum = "invalid_format"
	Labrp400ApplicationJSONErrorEnumInvalidTxnid     Labrp400ApplicationJSONErrorEnum = "invalid_txnid"
	Labrp400ApplicationJSONErrorEnumInvalidConsentid Labrp400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Labrp400ApplicationJSONErrorDescriptionEnum string

const (
	Labrp400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Labrp400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Labrp400ApplicationJSONErrorDescriptionEnumBadRequest                              Labrp400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Labrp400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Labrp400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Labrp400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Labrp400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Labrp400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Labrp400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Labrp400ApplicationJSON struct {
	Error            *Labrp400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp401ApplicationJSONErrorEnum string

const (
	Labrp401ApplicationJSONErrorEnumInvalidAuthentication Labrp401ApplicationJSONErrorEnum = "invalid_authentication"
	Labrp401ApplicationJSONErrorEnumInvalidAuthorization  Labrp401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Labrp401ApplicationJSONErrorDescriptionEnum string

const (
	Labrp401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Labrp401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Labrp401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Labrp401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Labrp401ApplicationJSON struct {
	Error            *Labrp401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp404ApplicationJSONErrorEnum string

const (
	Labrp404ApplicationJSONErrorEnumRecordNotFound Labrp404ApplicationJSONErrorEnum = "record_not_found"
	Labrp404ApplicationJSONErrorEnumURLNotFound    Labrp404ApplicationJSONErrorEnum = "url_not_found"
)

type Labrp404ApplicationJSONErrorDescriptionEnum string

const (
	Labrp404ApplicationJSONErrorDescriptionEnumNoRecordFound               Labrp404ApplicationJSONErrorDescriptionEnum = "No record found"
	Labrp404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Labrp404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Labrp404ApplicationJSON struct {
	Error            *Labrp404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp500ApplicationJSONErrorEnum string

const (
	Labrp500ApplicationJSONErrorEnumInternalServerError Labrp500ApplicationJSONErrorEnum = "internal_server_error"
)

type Labrp500ApplicationJSONErrorDescriptionEnum string

const (
	Labrp500ApplicationJSONErrorDescriptionEnumInternalServerError Labrp500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Labrp500ApplicationJSON struct {
	Error            *Labrp500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp502ApplicationJSONErrorEnum string

const (
	Labrp502ApplicationJSONErrorEnumBadGatewy Labrp502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Labrp502ApplicationJSONErrorDescriptionEnum string

const (
	Labrp502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Labrp502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Labrp502ApplicationJSON struct {
	Error            *Labrp502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp503ApplicationJSONErrorEnum string

const (
	Labrp503ApplicationJSONErrorEnumServiceUnavailable Labrp503ApplicationJSONErrorEnum = "service_unavailable"
)

type Labrp503ApplicationJSONErrorDescriptionEnum string

const (
	Labrp503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Labrp503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Labrp503ApplicationJSON struct {
	Error            *Labrp503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Labrp504ApplicationJSONErrorEnum string

const (
	Labrp504ApplicationJSONErrorEnumGatewayTimeout Labrp504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Labrp504ApplicationJSONErrorDescriptionEnum string

const (
	Labrp504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Labrp504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Labrp504ApplicationJSON struct {
	Error            *Labrp504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Labrp504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type LabrpResponse struct {
	ContentType                   string
	StatusCode                    int64
	Labrp400ApplicationJSONObject *Labrp400ApplicationJSON
	Labrp401ApplicationJSONObject *Labrp401ApplicationJSON
	Labrp404ApplicationJSONObject *Labrp404ApplicationJSON
	Labrp500ApplicationJSONObject *Labrp500ApplicationJSON
	Labrp502ApplicationJSONObject *Labrp502ApplicationJSON
	Labrp503ApplicationJSONObject *Labrp503ApplicationJSON
	Labrp504ApplicationJSONObject *Labrp504ApplicationJSON
}
