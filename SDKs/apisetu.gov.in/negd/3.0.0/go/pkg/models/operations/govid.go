package operations

import (
	"openapi/pkg/models/shared"
)

type GovidRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Cardno   string `json:"cardno"`
}

type GovidRequestBodyFormatEnum string

const (
	GovidRequestBodyFormatEnumPdf GovidRequestBodyFormatEnum = "pdf"
)

type GovidRequestBody struct {
	CertificateParameters *GovidRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                GovidRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type GovidSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type GovidRequest struct {
	Request  *GovidRequestBody `request:"mediaType=application/json"`
	Security GovidSecurity
}

type Govid400ApplicationJSONErrorEnum string

const (
	Govid400ApplicationJSONErrorEnumMissingParameter Govid400ApplicationJSONErrorEnum = "missing_parameter"
	Govid400ApplicationJSONErrorEnumInvalidParameter Govid400ApplicationJSONErrorEnum = "invalid_parameter"
	Govid400ApplicationJSONErrorEnumInvalidFormat    Govid400ApplicationJSONErrorEnum = "invalid_format"
	Govid400ApplicationJSONErrorEnumInvalidTxnid     Govid400ApplicationJSONErrorEnum = "invalid_txnid"
	Govid400ApplicationJSONErrorEnumInvalidConsentid Govid400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Govid400ApplicationJSONErrorDescriptionEnum string

const (
	Govid400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Govid400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Govid400ApplicationJSONErrorDescriptionEnumBadRequest                              Govid400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Govid400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Govid400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Govid400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Govid400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Govid400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Govid400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Govid400ApplicationJSON struct {
	Error            *Govid400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid401ApplicationJSONErrorEnum string

const (
	Govid401ApplicationJSONErrorEnumInvalidAuthentication Govid401ApplicationJSONErrorEnum = "invalid_authentication"
	Govid401ApplicationJSONErrorEnumInvalidAuthorization  Govid401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Govid401ApplicationJSONErrorDescriptionEnum string

const (
	Govid401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Govid401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Govid401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Govid401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Govid401ApplicationJSON struct {
	Error            *Govid401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid404ApplicationJSONErrorEnum string

const (
	Govid404ApplicationJSONErrorEnumRecordNotFound Govid404ApplicationJSONErrorEnum = "record_not_found"
	Govid404ApplicationJSONErrorEnumURLNotFound    Govid404ApplicationJSONErrorEnum = "url_not_found"
)

type Govid404ApplicationJSONErrorDescriptionEnum string

const (
	Govid404ApplicationJSONErrorDescriptionEnumNoRecordFound               Govid404ApplicationJSONErrorDescriptionEnum = "No record found"
	Govid404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Govid404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Govid404ApplicationJSON struct {
	Error            *Govid404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid500ApplicationJSONErrorEnum string

const (
	Govid500ApplicationJSONErrorEnumInternalServerError Govid500ApplicationJSONErrorEnum = "internal_server_error"
)

type Govid500ApplicationJSONErrorDescriptionEnum string

const (
	Govid500ApplicationJSONErrorDescriptionEnumInternalServerError Govid500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Govid500ApplicationJSON struct {
	Error            *Govid500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid502ApplicationJSONErrorEnum string

const (
	Govid502ApplicationJSONErrorEnumBadGatewy Govid502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Govid502ApplicationJSONErrorDescriptionEnum string

const (
	Govid502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Govid502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Govid502ApplicationJSON struct {
	Error            *Govid502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid503ApplicationJSONErrorEnum string

const (
	Govid503ApplicationJSONErrorEnumServiceUnavailable Govid503ApplicationJSONErrorEnum = "service_unavailable"
)

type Govid503ApplicationJSONErrorDescriptionEnum string

const (
	Govid503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Govid503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Govid503ApplicationJSON struct {
	Error            *Govid503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Govid504ApplicationJSONErrorEnum string

const (
	Govid504ApplicationJSONErrorEnumGatewayTimeout Govid504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Govid504ApplicationJSONErrorDescriptionEnum string

const (
	Govid504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Govid504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Govid504ApplicationJSON struct {
	Error            *Govid504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Govid504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type GovidResponse struct {
	ContentType                   string
	StatusCode                    int64
	Govid400ApplicationJSONObject *Govid400ApplicationJSON
	Govid401ApplicationJSONObject *Govid401ApplicationJSON
	Govid404ApplicationJSONObject *Govid404ApplicationJSON
	Govid500ApplicationJSONObject *Govid500ApplicationJSON
	Govid502ApplicationJSONObject *Govid502ApplicationJSON
	Govid503ApplicationJSONObject *Govid503ApplicationJSON
	Govid504ApplicationJSONObject *Govid504ApplicationJSON
}
