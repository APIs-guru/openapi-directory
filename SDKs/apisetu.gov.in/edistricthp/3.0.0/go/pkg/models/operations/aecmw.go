package operations

import (
	"openapi/pkg/models/shared"
)

type AecmwRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type AecmwRequestBodyFormatEnum string

const (
	AecmwRequestBodyFormatEnumPdf AecmwRequestBodyFormatEnum = "pdf"
)

type AecmwRequestBody struct {
	CertificateParameters *AecmwRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AecmwRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AecmwSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type AecmwRequest struct {
	Request  *AecmwRequestBody `request:"mediaType=application/json"`
	Security AecmwSecurity
}

type Aecmw400ApplicationJSONErrorEnum string

const (
	Aecmw400ApplicationJSONErrorEnumMissingParameter Aecmw400ApplicationJSONErrorEnum = "missing_parameter"
	Aecmw400ApplicationJSONErrorEnumInvalidParameter Aecmw400ApplicationJSONErrorEnum = "invalid_parameter"
	Aecmw400ApplicationJSONErrorEnumInvalidFormat    Aecmw400ApplicationJSONErrorEnum = "invalid_format"
	Aecmw400ApplicationJSONErrorEnumInvalidTxnid     Aecmw400ApplicationJSONErrorEnum = "invalid_txnid"
	Aecmw400ApplicationJSONErrorEnumInvalidConsentid Aecmw400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Aecmw400ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Aecmw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Aecmw400ApplicationJSONErrorDescriptionEnumBadRequest                              Aecmw400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Aecmw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Aecmw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Aecmw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Aecmw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Aecmw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Aecmw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Aecmw400ApplicationJSON struct {
	Error            *Aecmw400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw401ApplicationJSONErrorEnum string

const (
	Aecmw401ApplicationJSONErrorEnumInvalidAuthentication Aecmw401ApplicationJSONErrorEnum = "invalid_authentication"
	Aecmw401ApplicationJSONErrorEnumInvalidAuthorization  Aecmw401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Aecmw401ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Aecmw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Aecmw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Aecmw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Aecmw401ApplicationJSON struct {
	Error            *Aecmw401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw404ApplicationJSONErrorEnum string

const (
	Aecmw404ApplicationJSONErrorEnumRecordNotFound Aecmw404ApplicationJSONErrorEnum = "record_not_found"
	Aecmw404ApplicationJSONErrorEnumURLNotFound    Aecmw404ApplicationJSONErrorEnum = "url_not_found"
)

type Aecmw404ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw404ApplicationJSONErrorDescriptionEnumNoRecordFound               Aecmw404ApplicationJSONErrorDescriptionEnum = "No record found"
	Aecmw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Aecmw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Aecmw404ApplicationJSON struct {
	Error            *Aecmw404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw500ApplicationJSONErrorEnum string

const (
	Aecmw500ApplicationJSONErrorEnumInternalServerError Aecmw500ApplicationJSONErrorEnum = "internal_server_error"
)

type Aecmw500ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw500ApplicationJSONErrorDescriptionEnumInternalServerError Aecmw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Aecmw500ApplicationJSON struct {
	Error            *Aecmw500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw502ApplicationJSONErrorEnum string

const (
	Aecmw502ApplicationJSONErrorEnumBadGatewy Aecmw502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Aecmw502ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Aecmw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Aecmw502ApplicationJSON struct {
	Error            *Aecmw502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw503ApplicationJSONErrorEnum string

const (
	Aecmw503ApplicationJSONErrorEnumServiceUnavailable Aecmw503ApplicationJSONErrorEnum = "service_unavailable"
)

type Aecmw503ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Aecmw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Aecmw503ApplicationJSON struct {
	Error            *Aecmw503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aecmw504ApplicationJSONErrorEnum string

const (
	Aecmw504ApplicationJSONErrorEnumGatewayTimeout Aecmw504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Aecmw504ApplicationJSONErrorDescriptionEnum string

const (
	Aecmw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Aecmw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Aecmw504ApplicationJSON struct {
	Error            *Aecmw504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aecmw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AecmwResponse struct {
	ContentType                   string
	StatusCode                    int64
	Aecmw400ApplicationJSONObject *Aecmw400ApplicationJSON
	Aecmw401ApplicationJSONObject *Aecmw401ApplicationJSON
	Aecmw404ApplicationJSONObject *Aecmw404ApplicationJSON
	Aecmw500ApplicationJSONObject *Aecmw500ApplicationJSON
	Aecmw502ApplicationJSONObject *Aecmw502ApplicationJSON
	Aecmw503ApplicationJSONObject *Aecmw503ApplicationJSON
	Aecmw504ApplicationJSONObject *Aecmw504ApplicationJSON
}
