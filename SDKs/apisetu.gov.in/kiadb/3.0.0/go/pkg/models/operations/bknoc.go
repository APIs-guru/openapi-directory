package operations

import (
	"openapi/pkg/models/shared"
)

type BknocRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegNum   string `json:"RegNum"`
	UID      string `json:"UID"`
}

type BknocRequestBodyFormatEnum string

const (
	BknocRequestBodyFormatEnumPdf BknocRequestBodyFormatEnum = "pdf"
)

type BknocRequestBody struct {
	CertificateParameters *BknocRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BknocRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BknocSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Bknoc400ApplicationJSONErrorEnum string

const (
	Bknoc400ApplicationJSONErrorEnumMissingParameter Bknoc400ApplicationJSONErrorEnum = "missing_parameter"
	Bknoc400ApplicationJSONErrorEnumInvalidParameter Bknoc400ApplicationJSONErrorEnum = "invalid_parameter"
	Bknoc400ApplicationJSONErrorEnumInvalidFormat    Bknoc400ApplicationJSONErrorEnum = "invalid_format"
	Bknoc400ApplicationJSONErrorEnumInvalidTxnid     Bknoc400ApplicationJSONErrorEnum = "invalid_txnid"
	Bknoc400ApplicationJSONErrorEnumInvalidConsentid Bknoc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Bknoc400ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Bknoc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Bknoc400ApplicationJSONErrorDescriptionEnumBadRequest                              Bknoc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Bknoc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Bknoc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Bknoc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Bknoc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Bknoc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Bknoc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Bknoc400ApplicationJSON struct {
	Error            *Bknoc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc401ApplicationJSONErrorEnum string

const (
	Bknoc401ApplicationJSONErrorEnumInvalidAuthentication Bknoc401ApplicationJSONErrorEnum = "invalid_authentication"
	Bknoc401ApplicationJSONErrorEnumInvalidAuthorization  Bknoc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Bknoc401ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Bknoc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Bknoc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Bknoc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Bknoc401ApplicationJSON struct {
	Error            *Bknoc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc404ApplicationJSONErrorEnum string

const (
	Bknoc404ApplicationJSONErrorEnumRecordNotFound Bknoc404ApplicationJSONErrorEnum = "record_not_found"
	Bknoc404ApplicationJSONErrorEnumURLNotFound    Bknoc404ApplicationJSONErrorEnum = "url_not_found"
)

type Bknoc404ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Bknoc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Bknoc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Bknoc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Bknoc404ApplicationJSON struct {
	Error            *Bknoc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc500ApplicationJSONErrorEnum string

const (
	Bknoc500ApplicationJSONErrorEnumInternalServerError Bknoc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Bknoc500ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc500ApplicationJSONErrorDescriptionEnumInternalServerError Bknoc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Bknoc500ApplicationJSON struct {
	Error            *Bknoc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc502ApplicationJSONErrorEnum string

const (
	Bknoc502ApplicationJSONErrorEnumBadGatewy Bknoc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Bknoc502ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Bknoc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Bknoc502ApplicationJSON struct {
	Error            *Bknoc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc503ApplicationJSONErrorEnum string

const (
	Bknoc503ApplicationJSONErrorEnumServiceUnavailable Bknoc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Bknoc503ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Bknoc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Bknoc503ApplicationJSON struct {
	Error            *Bknoc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bknoc504ApplicationJSONErrorEnum string

const (
	Bknoc504ApplicationJSONErrorEnumGatewayTimeout Bknoc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Bknoc504ApplicationJSONErrorDescriptionEnum string

const (
	Bknoc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Bknoc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Bknoc504ApplicationJSON struct {
	Error            *Bknoc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bknoc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BknocRequest struct {
	Request  *BknocRequestBody `request:"mediaType=application/json"`
	Security BknocSecurity
}

type BknocResponse struct {
	ContentType                   string
	StatusCode                    int64
	Bknoc400ApplicationJSONObject *Bknoc400ApplicationJSON
	Bknoc401ApplicationJSONObject *Bknoc401ApplicationJSON
	Bknoc404ApplicationJSONObject *Bknoc404ApplicationJSON
	Bknoc500ApplicationJSONObject *Bknoc500ApplicationJSON
	Bknoc502ApplicationJSONObject *Bknoc502ApplicationJSON
	Bknoc503ApplicationJSONObject *Bknoc503ApplicationJSON
	Bknoc504ApplicationJSONObject *Bknoc504ApplicationJSON
}
