package operations

import (
	"openapi/pkg/models/shared"
)

type RatcrRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
}

type RatcrRequestBodyFormatEnum string

const (
	RatcrRequestBodyFormatEnumPdf RatcrRequestBodyFormatEnum = "pdf"
)

type RatcrRequestBody struct {
	CertificateParameters *RatcrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RatcrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RatcrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RatcrRequest struct {
	Request  *RatcrRequestBody `request:"mediaType=application/json"`
	Security RatcrSecurity
}

type Ratcr400ApplicationJSONErrorEnum string

const (
	Ratcr400ApplicationJSONErrorEnumMissingParameter Ratcr400ApplicationJSONErrorEnum = "missing_parameter"
	Ratcr400ApplicationJSONErrorEnumInvalidParameter Ratcr400ApplicationJSONErrorEnum = "invalid_parameter"
	Ratcr400ApplicationJSONErrorEnumInvalidFormat    Ratcr400ApplicationJSONErrorEnum = "invalid_format"
	Ratcr400ApplicationJSONErrorEnumInvalidTxnid     Ratcr400ApplicationJSONErrorEnum = "invalid_txnid"
	Ratcr400ApplicationJSONErrorEnumInvalidConsentid Ratcr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ratcr400ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ratcr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ratcr400ApplicationJSONErrorDescriptionEnumBadRequest                              Ratcr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ratcr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ratcr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ratcr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ratcr400ApplicationJSON struct {
	Error            *Ratcr400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr401ApplicationJSONErrorEnum string

const (
	Ratcr401ApplicationJSONErrorEnumInvalidAuthentication Ratcr401ApplicationJSONErrorEnum = "invalid_authentication"
	Ratcr401ApplicationJSONErrorEnumInvalidAuthorization  Ratcr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ratcr401ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ratcr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ratcr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ratcr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ratcr401ApplicationJSON struct {
	Error            *Ratcr401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr404ApplicationJSONErrorEnum string

const (
	Ratcr404ApplicationJSONErrorEnumRecordNotFound Ratcr404ApplicationJSONErrorEnum = "record_not_found"
	Ratcr404ApplicationJSONErrorEnumURLNotFound    Ratcr404ApplicationJSONErrorEnum = "url_not_found"
)

type Ratcr404ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ratcr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ratcr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ratcr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ratcr404ApplicationJSON struct {
	Error            *Ratcr404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr500ApplicationJSONErrorEnum string

const (
	Ratcr500ApplicationJSONErrorEnumInternalServerError Ratcr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ratcr500ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr500ApplicationJSONErrorDescriptionEnumInternalServerError Ratcr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ratcr500ApplicationJSON struct {
	Error            *Ratcr500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr502ApplicationJSONErrorEnum string

const (
	Ratcr502ApplicationJSONErrorEnumBadGatewy Ratcr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ratcr502ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ratcr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ratcr502ApplicationJSON struct {
	Error            *Ratcr502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr503ApplicationJSONErrorEnum string

const (
	Ratcr503ApplicationJSONErrorEnumServiceUnavailable Ratcr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ratcr503ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ratcr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ratcr503ApplicationJSON struct {
	Error            *Ratcr503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr504ApplicationJSONErrorEnum string

const (
	Ratcr504ApplicationJSONErrorEnumGatewayTimeout Ratcr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ratcr504ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ratcr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ratcr504ApplicationJSON struct {
	Error            *Ratcr504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RatcrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ratcr400ApplicationJSONObject *Ratcr400ApplicationJSON
	Ratcr401ApplicationJSONObject *Ratcr401ApplicationJSON
	Ratcr404ApplicationJSONObject *Ratcr404ApplicationJSON
	Ratcr500ApplicationJSONObject *Ratcr500ApplicationJSON
	Ratcr502ApplicationJSONObject *Ratcr502ApplicationJSON
	Ratcr503ApplicationJSONObject *Ratcr503ApplicationJSON
	Ratcr504ApplicationJSONObject *Ratcr504ApplicationJSON
}
