package operations

import (
	"openapi/pkg/models/shared"
)

type NtmksRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type NtmksRequestBodyFormatEnum string

const (
	NtmksRequestBodyFormatEnumPdf NtmksRequestBodyFormatEnum = "pdf"
)

type NtmksRequestBody struct {
	CertificateParameters *NtmksRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NtmksRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NtmksSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ntmks400ApplicationJSONErrorEnum string

const (
	Ntmks400ApplicationJSONErrorEnumMissingParameter Ntmks400ApplicationJSONErrorEnum = "missing_parameter"
	Ntmks400ApplicationJSONErrorEnumInvalidParameter Ntmks400ApplicationJSONErrorEnum = "invalid_parameter"
	Ntmks400ApplicationJSONErrorEnumInvalidFormat    Ntmks400ApplicationJSONErrorEnum = "invalid_format"
	Ntmks400ApplicationJSONErrorEnumInvalidTxnid     Ntmks400ApplicationJSONErrorEnum = "invalid_txnid"
	Ntmks400ApplicationJSONErrorEnumInvalidConsentid Ntmks400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ntmks400ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ntmks400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ntmks400ApplicationJSONErrorDescriptionEnumBadRequest                              Ntmks400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ntmks400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ntmks400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ntmks400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ntmks400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ntmks400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ntmks400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ntmks400ApplicationJSON struct {
	Error            *Ntmks400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks401ApplicationJSONErrorEnum string

const (
	Ntmks401ApplicationJSONErrorEnumInvalidAuthentication Ntmks401ApplicationJSONErrorEnum = "invalid_authentication"
	Ntmks401ApplicationJSONErrorEnumInvalidAuthorization  Ntmks401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ntmks401ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ntmks401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ntmks401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ntmks401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ntmks401ApplicationJSON struct {
	Error            *Ntmks401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks404ApplicationJSONErrorEnum string

const (
	Ntmks404ApplicationJSONErrorEnumRecordNotFound Ntmks404ApplicationJSONErrorEnum = "record_not_found"
	Ntmks404ApplicationJSONErrorEnumURLNotFound    Ntmks404ApplicationJSONErrorEnum = "url_not_found"
)

type Ntmks404ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ntmks404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ntmks404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ntmks404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ntmks404ApplicationJSON struct {
	Error            *Ntmks404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks500ApplicationJSONErrorEnum string

const (
	Ntmks500ApplicationJSONErrorEnumInternalServerError Ntmks500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ntmks500ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks500ApplicationJSONErrorDescriptionEnumInternalServerError Ntmks500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ntmks500ApplicationJSON struct {
	Error            *Ntmks500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks502ApplicationJSONErrorEnum string

const (
	Ntmks502ApplicationJSONErrorEnumBadGatewy Ntmks502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ntmks502ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ntmks502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ntmks502ApplicationJSON struct {
	Error            *Ntmks502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks503ApplicationJSONErrorEnum string

const (
	Ntmks503ApplicationJSONErrorEnumServiceUnavailable Ntmks503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ntmks503ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ntmks503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ntmks503ApplicationJSON struct {
	Error            *Ntmks503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ntmks504ApplicationJSONErrorEnum string

const (
	Ntmks504ApplicationJSONErrorEnumGatewayTimeout Ntmks504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ntmks504ApplicationJSONErrorDescriptionEnum string

const (
	Ntmks504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ntmks504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ntmks504ApplicationJSON struct {
	Error            *Ntmks504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ntmks504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NtmksRequest struct {
	Request  *NtmksRequestBody `request:"mediaType=application/json"`
	Security NtmksSecurity
}

type NtmksResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ntmks400ApplicationJSONObject *Ntmks400ApplicationJSON
	Ntmks401ApplicationJSONObject *Ntmks401ApplicationJSON
	Ntmks404ApplicationJSONObject *Ntmks404ApplicationJSON
	Ntmks500ApplicationJSONObject *Ntmks500ApplicationJSON
	Ntmks502ApplicationJSONObject *Ntmks502ApplicationJSON
	Ntmks503ApplicationJSONObject *Ntmks503ApplicationJSON
	Ntmks504ApplicationJSONObject *Ntmks504ApplicationJSON
}
