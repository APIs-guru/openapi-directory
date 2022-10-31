package operations

import (
	"openapi/pkg/models/shared"
)

type ApptuRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type ApptuRequestBodyFormatEnum string

const (
	ApptuRequestBodyFormatEnumPdf ApptuRequestBodyFormatEnum = "pdf"
)

type ApptuRequestBody struct {
	CertificateParameters *ApptuRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                ApptuRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ApptuSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ApptuRequest struct {
	Request  *ApptuRequestBody `request:"mediaType=application/json"`
	Security ApptuSecurity
}

type Apptu400ApplicationJSONErrorEnum string

const (
	Apptu400ApplicationJSONErrorEnumMissingParameter Apptu400ApplicationJSONErrorEnum = "missing_parameter"
	Apptu400ApplicationJSONErrorEnumInvalidParameter Apptu400ApplicationJSONErrorEnum = "invalid_parameter"
	Apptu400ApplicationJSONErrorEnumInvalidFormat    Apptu400ApplicationJSONErrorEnum = "invalid_format"
	Apptu400ApplicationJSONErrorEnumInvalidTxnid     Apptu400ApplicationJSONErrorEnum = "invalid_txnid"
	Apptu400ApplicationJSONErrorEnumInvalidConsentid Apptu400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Apptu400ApplicationJSONErrorDescriptionEnum string

const (
	Apptu400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Apptu400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Apptu400ApplicationJSONErrorDescriptionEnumBadRequest                              Apptu400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Apptu400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Apptu400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Apptu400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Apptu400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Apptu400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Apptu400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Apptu400ApplicationJSON struct {
	Error            *Apptu400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu401ApplicationJSONErrorEnum string

const (
	Apptu401ApplicationJSONErrorEnumInvalidAuthentication Apptu401ApplicationJSONErrorEnum = "invalid_authentication"
	Apptu401ApplicationJSONErrorEnumInvalidAuthorization  Apptu401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Apptu401ApplicationJSONErrorDescriptionEnum string

const (
	Apptu401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Apptu401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Apptu401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Apptu401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Apptu401ApplicationJSON struct {
	Error            *Apptu401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu404ApplicationJSONErrorEnum string

const (
	Apptu404ApplicationJSONErrorEnumRecordNotFound Apptu404ApplicationJSONErrorEnum = "record_not_found"
	Apptu404ApplicationJSONErrorEnumURLNotFound    Apptu404ApplicationJSONErrorEnum = "url_not_found"
)

type Apptu404ApplicationJSONErrorDescriptionEnum string

const (
	Apptu404ApplicationJSONErrorDescriptionEnumNoRecordFound               Apptu404ApplicationJSONErrorDescriptionEnum = "No record found"
	Apptu404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Apptu404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Apptu404ApplicationJSON struct {
	Error            *Apptu404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu500ApplicationJSONErrorEnum string

const (
	Apptu500ApplicationJSONErrorEnumInternalServerError Apptu500ApplicationJSONErrorEnum = "internal_server_error"
)

type Apptu500ApplicationJSONErrorDescriptionEnum string

const (
	Apptu500ApplicationJSONErrorDescriptionEnumInternalServerError Apptu500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Apptu500ApplicationJSON struct {
	Error            *Apptu500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu502ApplicationJSONErrorEnum string

const (
	Apptu502ApplicationJSONErrorEnumBadGatewy Apptu502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Apptu502ApplicationJSONErrorDescriptionEnum string

const (
	Apptu502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Apptu502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Apptu502ApplicationJSON struct {
	Error            *Apptu502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu503ApplicationJSONErrorEnum string

const (
	Apptu503ApplicationJSONErrorEnumServiceUnavailable Apptu503ApplicationJSONErrorEnum = "service_unavailable"
)

type Apptu503ApplicationJSONErrorDescriptionEnum string

const (
	Apptu503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Apptu503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Apptu503ApplicationJSON struct {
	Error            *Apptu503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Apptu504ApplicationJSONErrorEnum string

const (
	Apptu504ApplicationJSONErrorEnumGatewayTimeout Apptu504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Apptu504ApplicationJSONErrorDescriptionEnum string

const (
	Apptu504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Apptu504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Apptu504ApplicationJSON struct {
	Error            *Apptu504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Apptu504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ApptuResponse struct {
	ContentType                   string
	StatusCode                    int64
	Apptu400ApplicationJSONObject *Apptu400ApplicationJSON
	Apptu401ApplicationJSONObject *Apptu401ApplicationJSON
	Apptu404ApplicationJSONObject *Apptu404ApplicationJSON
	Apptu500ApplicationJSONObject *Apptu500ApplicationJSON
	Apptu502ApplicationJSONObject *Apptu502ApplicationJSON
	Apptu503ApplicationJSONObject *Apptu503ApplicationJSON
	Apptu504ApplicationJSONObject *Apptu504ApplicationJSON
}
