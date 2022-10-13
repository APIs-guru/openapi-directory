package operations

import (
	"openapi/pkg/models/shared"
)

type SktscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type SktscRequestBodyFormatEnum string

const (
	SktscRequestBodyFormatEnumPdf SktscRequestBodyFormatEnum = "pdf"
)

type SktscRequestBody struct {
	CertificateParameters *SktscRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                SktscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SktscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SktscRequest struct {
	Request  *SktscRequestBody `request:"mediaType=application/json"`
	Security SktscSecurity
}

type Sktsc400ApplicationJSONErrorEnum string

const (
	Sktsc400ApplicationJSONErrorEnumMissingParameter Sktsc400ApplicationJSONErrorEnum = "missing_parameter"
	Sktsc400ApplicationJSONErrorEnumInvalidParameter Sktsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Sktsc400ApplicationJSONErrorEnumInvalidFormat    Sktsc400ApplicationJSONErrorEnum = "invalid_format"
	Sktsc400ApplicationJSONErrorEnumInvalidTxnid     Sktsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Sktsc400ApplicationJSONErrorEnumInvalidConsentid Sktsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Sktsc400ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Sktsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Sktsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Sktsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Sktsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Sktsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Sktsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Sktsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Sktsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sktsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Sktsc400ApplicationJSON struct {
	Error            *Sktsc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc401ApplicationJSONErrorEnum string

const (
	Sktsc401ApplicationJSONErrorEnumInvalidAuthentication Sktsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Sktsc401ApplicationJSONErrorEnumInvalidAuthorization  Sktsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Sktsc401ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Sktsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Sktsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sktsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Sktsc401ApplicationJSON struct {
	Error            *Sktsc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc404ApplicationJSONErrorEnum string

const (
	Sktsc404ApplicationJSONErrorEnumRecordNotFound Sktsc404ApplicationJSONErrorEnum = "record_not_found"
	Sktsc404ApplicationJSONErrorEnumURLNotFound    Sktsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Sktsc404ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Sktsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Sktsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sktsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Sktsc404ApplicationJSON struct {
	Error            *Sktsc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc500ApplicationJSONErrorEnum string

const (
	Sktsc500ApplicationJSONErrorEnumInternalServerError Sktsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Sktsc500ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc500ApplicationJSONErrorDescriptionEnumInternalServerError Sktsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Sktsc500ApplicationJSON struct {
	Error            *Sktsc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc502ApplicationJSONErrorEnum string

const (
	Sktsc502ApplicationJSONErrorEnumBadGatewy Sktsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Sktsc502ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sktsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Sktsc502ApplicationJSON struct {
	Error            *Sktsc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc503ApplicationJSONErrorEnum string

const (
	Sktsc503ApplicationJSONErrorEnumServiceUnavailable Sktsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Sktsc503ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sktsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Sktsc503ApplicationJSON struct {
	Error            *Sktsc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sktsc504ApplicationJSONErrorEnum string

const (
	Sktsc504ApplicationJSONErrorEnumGatewayTimeout Sktsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Sktsc504ApplicationJSONErrorDescriptionEnum string

const (
	Sktsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sktsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Sktsc504ApplicationJSON struct {
	Error            *Sktsc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sktsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type SktscResponse struct {
	ContentType                   string
	StatusCode                    int64
	Sktsc400ApplicationJSONObject *Sktsc400ApplicationJSON
	Sktsc401ApplicationJSONObject *Sktsc401ApplicationJSON
	Sktsc404ApplicationJSONObject *Sktsc404ApplicationJSON
	Sktsc500ApplicationJSONObject *Sktsc500ApplicationJSON
	Sktsc502ApplicationJSONObject *Sktsc502ApplicationJSON
	Sktsc503ApplicationJSONObject *Sktsc503ApplicationJSON
	Sktsc504ApplicationJSONObject *Sktsc504ApplicationJSON
}
