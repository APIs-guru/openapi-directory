package operations

import (
	"openapi/pkg/models/shared"
)

type TetcrRequestBodyCertificateParameters struct {
	FullName  string `json:"FullName"`
	Rollno    string `json:"rollno"`
	YearMonth string `json:"year_month"`
}

type TetcrRequestBodyFormatEnum string

const (
	TetcrRequestBodyFormatEnumPdf TetcrRequestBodyFormatEnum = "pdf"
)

type TetcrRequestBody struct {
	CertificateParameters *TetcrRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                TetcrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TetcrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type TetcrRequest struct {
	Request  *TetcrRequestBody `request:"mediaType=application/json"`
	Security TetcrSecurity
}

type Tetcr400ApplicationJSONErrorEnum string

const (
	Tetcr400ApplicationJSONErrorEnumMissingParameter Tetcr400ApplicationJSONErrorEnum = "missing_parameter"
	Tetcr400ApplicationJSONErrorEnumInvalidParameter Tetcr400ApplicationJSONErrorEnum = "invalid_parameter"
	Tetcr400ApplicationJSONErrorEnumInvalidFormat    Tetcr400ApplicationJSONErrorEnum = "invalid_format"
	Tetcr400ApplicationJSONErrorEnumInvalidTxnid     Tetcr400ApplicationJSONErrorEnum = "invalid_txnid"
	Tetcr400ApplicationJSONErrorEnumInvalidConsentid Tetcr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tetcr400ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tetcr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tetcr400ApplicationJSONErrorDescriptionEnumBadRequest                              Tetcr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tetcr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tetcr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tetcr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tetcr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tetcr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tetcr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tetcr400ApplicationJSON struct {
	Error            *Tetcr400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr401ApplicationJSONErrorEnum string

const (
	Tetcr401ApplicationJSONErrorEnumInvalidAuthentication Tetcr401ApplicationJSONErrorEnum = "invalid_authentication"
	Tetcr401ApplicationJSONErrorEnumInvalidAuthorization  Tetcr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tetcr401ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tetcr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tetcr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tetcr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tetcr401ApplicationJSON struct {
	Error            *Tetcr401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr404ApplicationJSONErrorEnum string

const (
	Tetcr404ApplicationJSONErrorEnumRecordNotFound Tetcr404ApplicationJSONErrorEnum = "record_not_found"
	Tetcr404ApplicationJSONErrorEnumURLNotFound    Tetcr404ApplicationJSONErrorEnum = "url_not_found"
)

type Tetcr404ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tetcr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tetcr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tetcr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tetcr404ApplicationJSON struct {
	Error            *Tetcr404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr500ApplicationJSONErrorEnum string

const (
	Tetcr500ApplicationJSONErrorEnumInternalServerError Tetcr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tetcr500ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr500ApplicationJSONErrorDescriptionEnumInternalServerError Tetcr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tetcr500ApplicationJSON struct {
	Error            *Tetcr500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr502ApplicationJSONErrorEnum string

const (
	Tetcr502ApplicationJSONErrorEnumBadGatewy Tetcr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tetcr502ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tetcr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tetcr502ApplicationJSON struct {
	Error            *Tetcr502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr503ApplicationJSONErrorEnum string

const (
	Tetcr503ApplicationJSONErrorEnumServiceUnavailable Tetcr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tetcr503ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tetcr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tetcr503ApplicationJSON struct {
	Error            *Tetcr503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tetcr504ApplicationJSONErrorEnum string

const (
	Tetcr504ApplicationJSONErrorEnumGatewayTimeout Tetcr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tetcr504ApplicationJSONErrorDescriptionEnum string

const (
	Tetcr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tetcr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tetcr504ApplicationJSON struct {
	Error            *Tetcr504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tetcr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type TetcrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tetcr400ApplicationJSONObject *Tetcr400ApplicationJSON
	Tetcr401ApplicationJSONObject *Tetcr401ApplicationJSON
	Tetcr404ApplicationJSONObject *Tetcr404ApplicationJSON
	Tetcr500ApplicationJSONObject *Tetcr500ApplicationJSON
	Tetcr502ApplicationJSONObject *Tetcr502ApplicationJSON
	Tetcr503ApplicationJSONObject *Tetcr503ApplicationJSON
	Tetcr504ApplicationJSONObject *Tetcr504ApplicationJSON
}
