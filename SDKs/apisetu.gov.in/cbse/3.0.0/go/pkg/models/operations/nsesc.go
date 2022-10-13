package operations

import (
	"openapi/pkg/models/shared"
)

type NsescRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type NsescRequestBodyFormatEnum string

const (
	NsescRequestBodyFormatEnumPdf NsescRequestBodyFormatEnum = "pdf"
)

type NsescRequestBody struct {
	CertificateParameters *NsescRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                NsescRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NsescSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type NsescRequest struct {
	Request  *NsescRequestBody `request:"mediaType=application/json"`
	Security NsescSecurity
}

type Nsesc400ApplicationJSONErrorEnum string

const (
	Nsesc400ApplicationJSONErrorEnumMissingParameter Nsesc400ApplicationJSONErrorEnum = "missing_parameter"
	Nsesc400ApplicationJSONErrorEnumInvalidParameter Nsesc400ApplicationJSONErrorEnum = "invalid_parameter"
	Nsesc400ApplicationJSONErrorEnumInvalidFormat    Nsesc400ApplicationJSONErrorEnum = "invalid_format"
	Nsesc400ApplicationJSONErrorEnumInvalidTxnid     Nsesc400ApplicationJSONErrorEnum = "invalid_txnid"
	Nsesc400ApplicationJSONErrorEnumInvalidConsentid Nsesc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nsesc400ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nsesc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nsesc400ApplicationJSONErrorDescriptionEnumBadRequest                              Nsesc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nsesc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nsesc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nsesc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nsesc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nsesc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nsesc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nsesc400ApplicationJSON struct {
	Error            *Nsesc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc401ApplicationJSONErrorEnum string

const (
	Nsesc401ApplicationJSONErrorEnumInvalidAuthentication Nsesc401ApplicationJSONErrorEnum = "invalid_authentication"
	Nsesc401ApplicationJSONErrorEnumInvalidAuthorization  Nsesc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nsesc401ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nsesc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nsesc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nsesc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nsesc401ApplicationJSON struct {
	Error            *Nsesc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc404ApplicationJSONErrorEnum string

const (
	Nsesc404ApplicationJSONErrorEnumRecordNotFound Nsesc404ApplicationJSONErrorEnum = "record_not_found"
	Nsesc404ApplicationJSONErrorEnumURLNotFound    Nsesc404ApplicationJSONErrorEnum = "url_not_found"
)

type Nsesc404ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nsesc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nsesc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nsesc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nsesc404ApplicationJSON struct {
	Error            *Nsesc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc500ApplicationJSONErrorEnum string

const (
	Nsesc500ApplicationJSONErrorEnumInternalServerError Nsesc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nsesc500ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc500ApplicationJSONErrorDescriptionEnumInternalServerError Nsesc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nsesc500ApplicationJSON struct {
	Error            *Nsesc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc502ApplicationJSONErrorEnum string

const (
	Nsesc502ApplicationJSONErrorEnumBadGatewy Nsesc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nsesc502ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nsesc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nsesc502ApplicationJSON struct {
	Error            *Nsesc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc503ApplicationJSONErrorEnum string

const (
	Nsesc503ApplicationJSONErrorEnumServiceUnavailable Nsesc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nsesc503ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nsesc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nsesc503ApplicationJSON struct {
	Error            *Nsesc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nsesc504ApplicationJSONErrorEnum string

const (
	Nsesc504ApplicationJSONErrorEnumGatewayTimeout Nsesc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nsesc504ApplicationJSONErrorDescriptionEnum string

const (
	Nsesc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nsesc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nsesc504ApplicationJSON struct {
	Error            *Nsesc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nsesc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type NsescResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nsesc400ApplicationJSONObject *Nsesc400ApplicationJSON
	Nsesc401ApplicationJSONObject *Nsesc401ApplicationJSON
	Nsesc404ApplicationJSONObject *Nsesc404ApplicationJSON
	Nsesc500ApplicationJSONObject *Nsesc500ApplicationJSON
	Nsesc502ApplicationJSONObject *Nsesc502ApplicationJSON
	Nsesc503ApplicationJSONObject *Nsesc503ApplicationJSON
	Nsesc504ApplicationJSONObject *Nsesc504ApplicationJSON
}
