package operations

import (
	"openapi/pkg/models/shared"
)

type AemtwRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type AemtwRequestBodyFormatEnum string

const (
	AemtwRequestBodyFormatEnumPdf AemtwRequestBodyFormatEnum = "pdf"
)

type AemtwRequestBody struct {
	CertificateParameters *AemtwRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AemtwRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AemtwSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Aemtw400ApplicationJSONErrorEnum string

const (
	Aemtw400ApplicationJSONErrorEnumMissingParameter Aemtw400ApplicationJSONErrorEnum = "missing_parameter"
	Aemtw400ApplicationJSONErrorEnumInvalidParameter Aemtw400ApplicationJSONErrorEnum = "invalid_parameter"
	Aemtw400ApplicationJSONErrorEnumInvalidFormat    Aemtw400ApplicationJSONErrorEnum = "invalid_format"
	Aemtw400ApplicationJSONErrorEnumInvalidTxnid     Aemtw400ApplicationJSONErrorEnum = "invalid_txnid"
	Aemtw400ApplicationJSONErrorEnumInvalidConsentid Aemtw400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Aemtw400ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Aemtw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Aemtw400ApplicationJSONErrorDescriptionEnumBadRequest                              Aemtw400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Aemtw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Aemtw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Aemtw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Aemtw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Aemtw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Aemtw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Aemtw400ApplicationJSON struct {
	Error            *Aemtw400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw401ApplicationJSONErrorEnum string

const (
	Aemtw401ApplicationJSONErrorEnumInvalidAuthentication Aemtw401ApplicationJSONErrorEnum = "invalid_authentication"
	Aemtw401ApplicationJSONErrorEnumInvalidAuthorization  Aemtw401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Aemtw401ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Aemtw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Aemtw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Aemtw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Aemtw401ApplicationJSON struct {
	Error            *Aemtw401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw404ApplicationJSONErrorEnum string

const (
	Aemtw404ApplicationJSONErrorEnumRecordNotFound Aemtw404ApplicationJSONErrorEnum = "record_not_found"
	Aemtw404ApplicationJSONErrorEnumURLNotFound    Aemtw404ApplicationJSONErrorEnum = "url_not_found"
)

type Aemtw404ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw404ApplicationJSONErrorDescriptionEnumNoRecordFound               Aemtw404ApplicationJSONErrorDescriptionEnum = "No record found"
	Aemtw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Aemtw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Aemtw404ApplicationJSON struct {
	Error            *Aemtw404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw500ApplicationJSONErrorEnum string

const (
	Aemtw500ApplicationJSONErrorEnumInternalServerError Aemtw500ApplicationJSONErrorEnum = "internal_server_error"
)

type Aemtw500ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw500ApplicationJSONErrorDescriptionEnumInternalServerError Aemtw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Aemtw500ApplicationJSON struct {
	Error            *Aemtw500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw502ApplicationJSONErrorEnum string

const (
	Aemtw502ApplicationJSONErrorEnumBadGatewy Aemtw502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Aemtw502ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Aemtw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Aemtw502ApplicationJSON struct {
	Error            *Aemtw502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw503ApplicationJSONErrorEnum string

const (
	Aemtw503ApplicationJSONErrorEnumServiceUnavailable Aemtw503ApplicationJSONErrorEnum = "service_unavailable"
)

type Aemtw503ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Aemtw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Aemtw503ApplicationJSON struct {
	Error            *Aemtw503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Aemtw504ApplicationJSONErrorEnum string

const (
	Aemtw504ApplicationJSONErrorEnumGatewayTimeout Aemtw504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Aemtw504ApplicationJSONErrorDescriptionEnum string

const (
	Aemtw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Aemtw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Aemtw504ApplicationJSON struct {
	Error            *Aemtw504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Aemtw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AemtwRequest struct {
	Request  *AemtwRequestBody `request:"mediaType=application/json"`
	Security AemtwSecurity
}

type AemtwResponse struct {
	ContentType                   string
	StatusCode                    int64
	Aemtw400ApplicationJSONObject *Aemtw400ApplicationJSON
	Aemtw401ApplicationJSONObject *Aemtw401ApplicationJSON
	Aemtw404ApplicationJSONObject *Aemtw404ApplicationJSON
	Aemtw500ApplicationJSONObject *Aemtw500ApplicationJSON
	Aemtw502ApplicationJSONObject *Aemtw502ApplicationJSON
	Aemtw503ApplicationJSONObject *Aemtw503ApplicationJSON
	Aemtw504ApplicationJSONObject *Aemtw504ApplicationJSON
}
