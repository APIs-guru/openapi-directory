package operations

import (
	"openapi/pkg/models/shared"
)

type PmjayRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Udf1     string `json:"UDF1"`
	Udf2     string `json:"UDF2"`
}

type PmjayRequestBodyFormatEnum string

const (
	PmjayRequestBodyFormatEnumPdf PmjayRequestBodyFormatEnum = "pdf"
)

type PmjayRequestBody struct {
	CertificateParameters *PmjayRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PmjayRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PmjaySecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Pmjay400ApplicationJSONErrorEnum string

const (
	Pmjay400ApplicationJSONErrorEnumMissingParameter Pmjay400ApplicationJSONErrorEnum = "missing_parameter"
	Pmjay400ApplicationJSONErrorEnumInvalidParameter Pmjay400ApplicationJSONErrorEnum = "invalid_parameter"
	Pmjay400ApplicationJSONErrorEnumInvalidFormat    Pmjay400ApplicationJSONErrorEnum = "invalid_format"
	Pmjay400ApplicationJSONErrorEnumInvalidTxnid     Pmjay400ApplicationJSONErrorEnum = "invalid_txnid"
	Pmjay400ApplicationJSONErrorEnumInvalidConsentid Pmjay400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Pmjay400ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Pmjay400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Pmjay400ApplicationJSONErrorDescriptionEnumBadRequest                              Pmjay400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Pmjay400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Pmjay400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Pmjay400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Pmjay400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Pmjay400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pmjay400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Pmjay400ApplicationJSON struct {
	Error            *Pmjay400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay401ApplicationJSONErrorEnum string

const (
	Pmjay401ApplicationJSONErrorEnumInvalidAuthentication Pmjay401ApplicationJSONErrorEnum = "invalid_authentication"
	Pmjay401ApplicationJSONErrorEnumInvalidAuthorization  Pmjay401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Pmjay401ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Pmjay401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Pmjay401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pmjay401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Pmjay401ApplicationJSON struct {
	Error            *Pmjay401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay404ApplicationJSONErrorEnum string

const (
	Pmjay404ApplicationJSONErrorEnumRecordNotFound Pmjay404ApplicationJSONErrorEnum = "record_not_found"
	Pmjay404ApplicationJSONErrorEnumURLNotFound    Pmjay404ApplicationJSONErrorEnum = "url_not_found"
)

type Pmjay404ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay404ApplicationJSONErrorDescriptionEnumNoRecordFound               Pmjay404ApplicationJSONErrorDescriptionEnum = "No record found"
	Pmjay404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pmjay404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Pmjay404ApplicationJSON struct {
	Error            *Pmjay404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay500ApplicationJSONErrorEnum string

const (
	Pmjay500ApplicationJSONErrorEnumInternalServerError Pmjay500ApplicationJSONErrorEnum = "internal_server_error"
)

type Pmjay500ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay500ApplicationJSONErrorDescriptionEnumInternalServerError Pmjay500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Pmjay500ApplicationJSON struct {
	Error            *Pmjay500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay502ApplicationJSONErrorEnum string

const (
	Pmjay502ApplicationJSONErrorEnumBadGatewy Pmjay502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Pmjay502ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pmjay502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Pmjay502ApplicationJSON struct {
	Error            *Pmjay502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay503ApplicationJSONErrorEnum string

const (
	Pmjay503ApplicationJSONErrorEnumServiceUnavailable Pmjay503ApplicationJSONErrorEnum = "service_unavailable"
)

type Pmjay503ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pmjay503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Pmjay503ApplicationJSON struct {
	Error            *Pmjay503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Pmjay504ApplicationJSONErrorEnum string

const (
	Pmjay504ApplicationJSONErrorEnumGatewayTimeout Pmjay504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Pmjay504ApplicationJSONErrorDescriptionEnum string

const (
	Pmjay504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pmjay504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Pmjay504ApplicationJSON struct {
	Error            *Pmjay504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Pmjay504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PmjayRequest struct {
	Request  *PmjayRequestBody `request:"mediaType=application/json"`
	Security PmjaySecurity
}

type PmjayResponse struct {
	ContentType                   string
	StatusCode                    int64
	Pmjay400ApplicationJSONObject *Pmjay400ApplicationJSON
	Pmjay401ApplicationJSONObject *Pmjay401ApplicationJSON
	Pmjay404ApplicationJSONObject *Pmjay404ApplicationJSON
	Pmjay500ApplicationJSONObject *Pmjay500ApplicationJSON
	Pmjay502ApplicationJSONObject *Pmjay502ApplicationJSON
	Pmjay503ApplicationJSONObject *Pmjay503ApplicationJSON
	Pmjay504ApplicationJSONObject *Pmjay504ApplicationJSON
}
