package operations

import (
	"openapi/pkg/models/shared"
)

type ArcmwRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type ArcmwRequestBodyFormatEnum string

const (
	ArcmwRequestBodyFormatEnumPdf ArcmwRequestBodyFormatEnum = "pdf"
)

type ArcmwRequestBody struct {
	CertificateParameters *ArcmwRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                ArcmwRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ArcmwSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ArcmwRequest struct {
	Request  *ArcmwRequestBody `request:"mediaType=application/json"`
	Security ArcmwSecurity
}

type Arcmw400ApplicationJSONErrorEnum string

const (
	Arcmw400ApplicationJSONErrorEnumMissingParameter Arcmw400ApplicationJSONErrorEnum = "missing_parameter"
	Arcmw400ApplicationJSONErrorEnumInvalidParameter Arcmw400ApplicationJSONErrorEnum = "invalid_parameter"
	Arcmw400ApplicationJSONErrorEnumInvalidFormat    Arcmw400ApplicationJSONErrorEnum = "invalid_format"
	Arcmw400ApplicationJSONErrorEnumInvalidTxnid     Arcmw400ApplicationJSONErrorEnum = "invalid_txnid"
	Arcmw400ApplicationJSONErrorEnumInvalidConsentid Arcmw400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Arcmw400ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Arcmw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Arcmw400ApplicationJSONErrorDescriptionEnumBadRequest                              Arcmw400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Arcmw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Arcmw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Arcmw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Arcmw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Arcmw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Arcmw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Arcmw400ApplicationJSON struct {
	Error            *Arcmw400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw401ApplicationJSONErrorEnum string

const (
	Arcmw401ApplicationJSONErrorEnumInvalidAuthentication Arcmw401ApplicationJSONErrorEnum = "invalid_authentication"
	Arcmw401ApplicationJSONErrorEnumInvalidAuthorization  Arcmw401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Arcmw401ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Arcmw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Arcmw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Arcmw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Arcmw401ApplicationJSON struct {
	Error            *Arcmw401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw404ApplicationJSONErrorEnum string

const (
	Arcmw404ApplicationJSONErrorEnumRecordNotFound Arcmw404ApplicationJSONErrorEnum = "record_not_found"
	Arcmw404ApplicationJSONErrorEnumURLNotFound    Arcmw404ApplicationJSONErrorEnum = "url_not_found"
)

type Arcmw404ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw404ApplicationJSONErrorDescriptionEnumNoRecordFound               Arcmw404ApplicationJSONErrorDescriptionEnum = "No record found"
	Arcmw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Arcmw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Arcmw404ApplicationJSON struct {
	Error            *Arcmw404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw500ApplicationJSONErrorEnum string

const (
	Arcmw500ApplicationJSONErrorEnumInternalServerError Arcmw500ApplicationJSONErrorEnum = "internal_server_error"
)

type Arcmw500ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw500ApplicationJSONErrorDescriptionEnumInternalServerError Arcmw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Arcmw500ApplicationJSON struct {
	Error            *Arcmw500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw502ApplicationJSONErrorEnum string

const (
	Arcmw502ApplicationJSONErrorEnumBadGatewy Arcmw502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Arcmw502ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Arcmw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Arcmw502ApplicationJSON struct {
	Error            *Arcmw502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw503ApplicationJSONErrorEnum string

const (
	Arcmw503ApplicationJSONErrorEnumServiceUnavailable Arcmw503ApplicationJSONErrorEnum = "service_unavailable"
)

type Arcmw503ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Arcmw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Arcmw503ApplicationJSON struct {
	Error            *Arcmw503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Arcmw504ApplicationJSONErrorEnum string

const (
	Arcmw504ApplicationJSONErrorEnumGatewayTimeout Arcmw504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Arcmw504ApplicationJSONErrorDescriptionEnum string

const (
	Arcmw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Arcmw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Arcmw504ApplicationJSON struct {
	Error            *Arcmw504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Arcmw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ArcmwResponse struct {
	ContentType                   string
	StatusCode                    int64
	Arcmw400ApplicationJSONObject *Arcmw400ApplicationJSON
	Arcmw401ApplicationJSONObject *Arcmw401ApplicationJSON
	Arcmw404ApplicationJSONObject *Arcmw404ApplicationJSON
	Arcmw500ApplicationJSONObject *Arcmw500ApplicationJSON
	Arcmw502ApplicationJSONObject *Arcmw502ApplicationJSON
	Arcmw503ApplicationJSONObject *Arcmw503ApplicationJSON
	Arcmw504ApplicationJSONObject *Arcmw504ApplicationJSON
}
