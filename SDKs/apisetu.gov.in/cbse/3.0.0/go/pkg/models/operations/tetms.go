package operations

import (
	"openapi/pkg/models/shared"
)

type TetmsRequestBodyCertificateParameters struct {
	FullName  string `json:"FullName"`
	Rollno    string `json:"rollno"`
	YearMonth string `json:"year_month"`
}

type TetmsRequestBodyFormatEnum string

const (
	TetmsRequestBodyFormatEnumPdf TetmsRequestBodyFormatEnum = "pdf"
)

type TetmsRequestBody struct {
	CertificateParameters *TetmsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                TetmsRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TetmsSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type TetmsRequest struct {
	Request  *TetmsRequestBody `request:"mediaType=application/json"`
	Security TetmsSecurity
}

type Tetms400ApplicationJSONErrorEnum string

const (
	Tetms400ApplicationJSONErrorEnumMissingParameter Tetms400ApplicationJSONErrorEnum = "missing_parameter"
	Tetms400ApplicationJSONErrorEnumInvalidParameter Tetms400ApplicationJSONErrorEnum = "invalid_parameter"
	Tetms400ApplicationJSONErrorEnumInvalidFormat    Tetms400ApplicationJSONErrorEnum = "invalid_format"
	Tetms400ApplicationJSONErrorEnumInvalidTxnid     Tetms400ApplicationJSONErrorEnum = "invalid_txnid"
	Tetms400ApplicationJSONErrorEnumInvalidConsentid Tetms400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tetms400ApplicationJSONErrorDescriptionEnum string

const (
	Tetms400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tetms400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tetms400ApplicationJSONErrorDescriptionEnumBadRequest                              Tetms400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tetms400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tetms400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tetms400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tetms400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tetms400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tetms400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tetms400ApplicationJSON struct {
	Error            *Tetms400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms401ApplicationJSONErrorEnum string

const (
	Tetms401ApplicationJSONErrorEnumInvalidAuthentication Tetms401ApplicationJSONErrorEnum = "invalid_authentication"
	Tetms401ApplicationJSONErrorEnumInvalidAuthorization  Tetms401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tetms401ApplicationJSONErrorDescriptionEnum string

const (
	Tetms401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tetms401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tetms401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tetms401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tetms401ApplicationJSON struct {
	Error            *Tetms401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms404ApplicationJSONErrorEnum string

const (
	Tetms404ApplicationJSONErrorEnumRecordNotFound Tetms404ApplicationJSONErrorEnum = "record_not_found"
	Tetms404ApplicationJSONErrorEnumURLNotFound    Tetms404ApplicationJSONErrorEnum = "url_not_found"
)

type Tetms404ApplicationJSONErrorDescriptionEnum string

const (
	Tetms404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tetms404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tetms404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tetms404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tetms404ApplicationJSON struct {
	Error            *Tetms404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms500ApplicationJSONErrorEnum string

const (
	Tetms500ApplicationJSONErrorEnumInternalServerError Tetms500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tetms500ApplicationJSONErrorDescriptionEnum string

const (
	Tetms500ApplicationJSONErrorDescriptionEnumInternalServerError Tetms500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tetms500ApplicationJSON struct {
	Error            *Tetms500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms502ApplicationJSONErrorEnum string

const (
	Tetms502ApplicationJSONErrorEnumBadGatewy Tetms502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tetms502ApplicationJSONErrorDescriptionEnum string

const (
	Tetms502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tetms502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tetms502ApplicationJSON struct {
	Error            *Tetms502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms503ApplicationJSONErrorEnum string

const (
	Tetms503ApplicationJSONErrorEnumServiceUnavailable Tetms503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tetms503ApplicationJSONErrorDescriptionEnum string

const (
	Tetms503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tetms503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tetms503ApplicationJSON struct {
	Error            *Tetms503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tetms504ApplicationJSONErrorEnum string

const (
	Tetms504ApplicationJSONErrorEnumGatewayTimeout Tetms504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tetms504ApplicationJSONErrorDescriptionEnum string

const (
	Tetms504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tetms504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tetms504ApplicationJSON struct {
	Error            *Tetms504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tetms504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type TetmsResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tetms400ApplicationJSONObject *Tetms400ApplicationJSON
	Tetms401ApplicationJSONObject *Tetms401ApplicationJSON
	Tetms404ApplicationJSONObject *Tetms404ApplicationJSON
	Tetms500ApplicationJSONObject *Tetms500ApplicationJSON
	Tetms502ApplicationJSONObject *Tetms502ApplicationJSON
	Tetms503ApplicationJSONObject *Tetms503ApplicationJSON
	Tetms504ApplicationJSONObject *Tetms504ApplicationJSON
}
