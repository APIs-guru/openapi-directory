package operations

import (
	"openapi/pkg/models/shared"
)

type LpgtvRequestBodyCertificateParameters struct {
	UID string `json:"UID"`
}

type LpgtvRequestBodyFormatEnum string

const (
	LpgtvRequestBodyFormatEnumPdf LpgtvRequestBodyFormatEnum = "pdf"
)

type LpgtvRequestBody struct {
	CertificateParameters *LpgtvRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                LpgtvRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LpgtvSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LpgtvRequest struct {
	Request  *LpgtvRequestBody `request:"mediaType=application/json"`
	Security LpgtvSecurity
}

type Lpgtv400ApplicationJSONErrorEnum string

const (
	Lpgtv400ApplicationJSONErrorEnumMissingParameter Lpgtv400ApplicationJSONErrorEnum = "missing_parameter"
	Lpgtv400ApplicationJSONErrorEnumInvalidParameter Lpgtv400ApplicationJSONErrorEnum = "invalid_parameter"
	Lpgtv400ApplicationJSONErrorEnumInvalidFormat    Lpgtv400ApplicationJSONErrorEnum = "invalid_format"
	Lpgtv400ApplicationJSONErrorEnumInvalidTxnid     Lpgtv400ApplicationJSONErrorEnum = "invalid_txnid"
	Lpgtv400ApplicationJSONErrorEnumInvalidConsentid Lpgtv400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Lpgtv400ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Lpgtv400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Lpgtv400ApplicationJSONErrorDescriptionEnumBadRequest                              Lpgtv400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Lpgtv400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Lpgtv400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Lpgtv400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Lpgtv400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Lpgtv400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lpgtv400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Lpgtv400ApplicationJSON struct {
	Error            *Lpgtv400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv401ApplicationJSONErrorEnum string

const (
	Lpgtv401ApplicationJSONErrorEnumInvalidAuthentication Lpgtv401ApplicationJSONErrorEnum = "invalid_authentication"
	Lpgtv401ApplicationJSONErrorEnumInvalidAuthorization  Lpgtv401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Lpgtv401ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Lpgtv401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Lpgtv401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lpgtv401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Lpgtv401ApplicationJSON struct {
	Error            *Lpgtv401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv404ApplicationJSONErrorEnum string

const (
	Lpgtv404ApplicationJSONErrorEnumRecordNotFound Lpgtv404ApplicationJSONErrorEnum = "record_not_found"
	Lpgtv404ApplicationJSONErrorEnumURLNotFound    Lpgtv404ApplicationJSONErrorEnum = "url_not_found"
)

type Lpgtv404ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv404ApplicationJSONErrorDescriptionEnumNoRecordFound               Lpgtv404ApplicationJSONErrorDescriptionEnum = "No record found"
	Lpgtv404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lpgtv404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Lpgtv404ApplicationJSON struct {
	Error            *Lpgtv404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv500ApplicationJSONErrorEnum string

const (
	Lpgtv500ApplicationJSONErrorEnumInternalServerError Lpgtv500ApplicationJSONErrorEnum = "internal_server_error"
)

type Lpgtv500ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv500ApplicationJSONErrorDescriptionEnumInternalServerError Lpgtv500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Lpgtv500ApplicationJSON struct {
	Error            *Lpgtv500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv502ApplicationJSONErrorEnum string

const (
	Lpgtv502ApplicationJSONErrorEnumBadGatewy Lpgtv502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Lpgtv502ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lpgtv502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Lpgtv502ApplicationJSON struct {
	Error            *Lpgtv502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv503ApplicationJSONErrorEnum string

const (
	Lpgtv503ApplicationJSONErrorEnumServiceUnavailable Lpgtv503ApplicationJSONErrorEnum = "service_unavailable"
)

type Lpgtv503ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lpgtv503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Lpgtv503ApplicationJSON struct {
	Error            *Lpgtv503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgtv504ApplicationJSONErrorEnum string

const (
	Lpgtv504ApplicationJSONErrorEnumGatewayTimeout Lpgtv504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Lpgtv504ApplicationJSONErrorDescriptionEnum string

const (
	Lpgtv504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lpgtv504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Lpgtv504ApplicationJSON struct {
	Error            *Lpgtv504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgtv504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type LpgtvResponse struct {
	ContentType                   string
	StatusCode                    int64
	Lpgtv400ApplicationJSONObject *Lpgtv400ApplicationJSON
	Lpgtv401ApplicationJSONObject *Lpgtv401ApplicationJSON
	Lpgtv404ApplicationJSONObject *Lpgtv404ApplicationJSON
	Lpgtv500ApplicationJSONObject *Lpgtv500ApplicationJSON
	Lpgtv502ApplicationJSONObject *Lpgtv502ApplicationJSON
	Lpgtv503ApplicationJSONObject *Lpgtv503ApplicationJSON
	Lpgtv504ApplicationJSONObject *Lpgtv504ApplicationJSON
}
