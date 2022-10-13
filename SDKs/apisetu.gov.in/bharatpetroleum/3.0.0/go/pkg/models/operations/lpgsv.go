package operations

import (
	"openapi/pkg/models/shared"
)

type LpgsvRequestBodyCertificateParameters struct {
	Lpgid string `json:"LPGID"`
	Svid  string `json:"SVID"`
}

type LpgsvRequestBodyFormatEnum string

const (
	LpgsvRequestBodyFormatEnumPdf LpgsvRequestBodyFormatEnum = "pdf"
)

type LpgsvRequestBody struct {
	CertificateParameters *LpgsvRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                LpgsvRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LpgsvSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LpgsvRequest struct {
	Request  *LpgsvRequestBody `request:"mediaType=application/json"`
	Security LpgsvSecurity
}

type Lpgsv400ApplicationJSONErrorEnum string

const (
	Lpgsv400ApplicationJSONErrorEnumMissingParameter Lpgsv400ApplicationJSONErrorEnum = "missing_parameter"
	Lpgsv400ApplicationJSONErrorEnumInvalidParameter Lpgsv400ApplicationJSONErrorEnum = "invalid_parameter"
	Lpgsv400ApplicationJSONErrorEnumInvalidFormat    Lpgsv400ApplicationJSONErrorEnum = "invalid_format"
	Lpgsv400ApplicationJSONErrorEnumInvalidTxnid     Lpgsv400ApplicationJSONErrorEnum = "invalid_txnid"
	Lpgsv400ApplicationJSONErrorEnumInvalidConsentid Lpgsv400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Lpgsv400ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Lpgsv400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Lpgsv400ApplicationJSONErrorDescriptionEnumBadRequest                              Lpgsv400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Lpgsv400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Lpgsv400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Lpgsv400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Lpgsv400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Lpgsv400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lpgsv400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Lpgsv400ApplicationJSON struct {
	Error            *Lpgsv400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv401ApplicationJSONErrorEnum string

const (
	Lpgsv401ApplicationJSONErrorEnumInvalidAuthentication Lpgsv401ApplicationJSONErrorEnum = "invalid_authentication"
	Lpgsv401ApplicationJSONErrorEnumInvalidAuthorization  Lpgsv401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Lpgsv401ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Lpgsv401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Lpgsv401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lpgsv401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Lpgsv401ApplicationJSON struct {
	Error            *Lpgsv401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv404ApplicationJSONErrorEnum string

const (
	Lpgsv404ApplicationJSONErrorEnumRecordNotFound Lpgsv404ApplicationJSONErrorEnum = "record_not_found"
	Lpgsv404ApplicationJSONErrorEnumURLNotFound    Lpgsv404ApplicationJSONErrorEnum = "url_not_found"
)

type Lpgsv404ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv404ApplicationJSONErrorDescriptionEnumNoRecordFound               Lpgsv404ApplicationJSONErrorDescriptionEnum = "No record found"
	Lpgsv404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lpgsv404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Lpgsv404ApplicationJSON struct {
	Error            *Lpgsv404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv500ApplicationJSONErrorEnum string

const (
	Lpgsv500ApplicationJSONErrorEnumInternalServerError Lpgsv500ApplicationJSONErrorEnum = "internal_server_error"
)

type Lpgsv500ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv500ApplicationJSONErrorDescriptionEnumInternalServerError Lpgsv500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Lpgsv500ApplicationJSON struct {
	Error            *Lpgsv500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv502ApplicationJSONErrorEnum string

const (
	Lpgsv502ApplicationJSONErrorEnumBadGatewy Lpgsv502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Lpgsv502ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lpgsv502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Lpgsv502ApplicationJSON struct {
	Error            *Lpgsv502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv503ApplicationJSONErrorEnum string

const (
	Lpgsv503ApplicationJSONErrorEnumServiceUnavailable Lpgsv503ApplicationJSONErrorEnum = "service_unavailable"
)

type Lpgsv503ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lpgsv503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Lpgsv503ApplicationJSON struct {
	Error            *Lpgsv503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Lpgsv504ApplicationJSONErrorEnum string

const (
	Lpgsv504ApplicationJSONErrorEnumGatewayTimeout Lpgsv504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Lpgsv504ApplicationJSONErrorDescriptionEnum string

const (
	Lpgsv504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lpgsv504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Lpgsv504ApplicationJSON struct {
	Error            *Lpgsv504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Lpgsv504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type LpgsvResponse struct {
	ContentType                   string
	StatusCode                    int64
	Lpgsv400ApplicationJSONObject *Lpgsv400ApplicationJSON
	Lpgsv401ApplicationJSONObject *Lpgsv401ApplicationJSON
	Lpgsv404ApplicationJSONObject *Lpgsv404ApplicationJSON
	Lpgsv500ApplicationJSONObject *Lpgsv500ApplicationJSON
	Lpgsv502ApplicationJSONObject *Lpgsv502ApplicationJSON
	Lpgsv503ApplicationJSONObject *Lpgsv503ApplicationJSON
	Lpgsv504ApplicationJSONObject *Lpgsv504ApplicationJSON
}
