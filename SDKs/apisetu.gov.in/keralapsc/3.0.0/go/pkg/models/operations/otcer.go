package operations

import (
	"openapi/pkg/models/shared"
)

type OtcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
}

type OtcerRequestBodyFormatEnum string

const (
	OtcerRequestBodyFormatEnumPdf OtcerRequestBodyFormatEnum = "pdf"
)

type OtcerRequestBody struct {
	CertificateParameters *OtcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                OtcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type OtcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type OtcerRequest struct {
	Request  *OtcerRequestBody `request:"mediaType=application/json"`
	Security OtcerSecurity
}

type Otcer400ApplicationJSONErrorEnum string

const (
	Otcer400ApplicationJSONErrorEnumMissingParameter Otcer400ApplicationJSONErrorEnum = "missing_parameter"
	Otcer400ApplicationJSONErrorEnumInvalidParameter Otcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Otcer400ApplicationJSONErrorEnumInvalidFormat    Otcer400ApplicationJSONErrorEnum = "invalid_format"
	Otcer400ApplicationJSONErrorEnumInvalidTxnid     Otcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Otcer400ApplicationJSONErrorEnumInvalidConsentid Otcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Otcer400ApplicationJSONErrorDescriptionEnum string

const (
	Otcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Otcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Otcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Otcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Otcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Otcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Otcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Otcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Otcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Otcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Otcer400ApplicationJSON struct {
	Error            *Otcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer401ApplicationJSONErrorEnum string

const (
	Otcer401ApplicationJSONErrorEnumInvalidAuthentication Otcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Otcer401ApplicationJSONErrorEnumInvalidAuthorization  Otcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Otcer401ApplicationJSONErrorDescriptionEnum string

const (
	Otcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Otcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Otcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Otcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Otcer401ApplicationJSON struct {
	Error            *Otcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer404ApplicationJSONErrorEnum string

const (
	Otcer404ApplicationJSONErrorEnumRecordNotFound Otcer404ApplicationJSONErrorEnum = "record_not_found"
	Otcer404ApplicationJSONErrorEnumURLNotFound    Otcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Otcer404ApplicationJSONErrorDescriptionEnum string

const (
	Otcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Otcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Otcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Otcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Otcer404ApplicationJSON struct {
	Error            *Otcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer500ApplicationJSONErrorEnum string

const (
	Otcer500ApplicationJSONErrorEnumInternalServerError Otcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Otcer500ApplicationJSONErrorDescriptionEnum string

const (
	Otcer500ApplicationJSONErrorDescriptionEnumInternalServerError Otcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Otcer500ApplicationJSON struct {
	Error            *Otcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer502ApplicationJSONErrorEnum string

const (
	Otcer502ApplicationJSONErrorEnumBadGatewy Otcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Otcer502ApplicationJSONErrorDescriptionEnum string

const (
	Otcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Otcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Otcer502ApplicationJSON struct {
	Error            *Otcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer503ApplicationJSONErrorEnum string

const (
	Otcer503ApplicationJSONErrorEnumServiceUnavailable Otcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Otcer503ApplicationJSONErrorDescriptionEnum string

const (
	Otcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Otcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Otcer503ApplicationJSON struct {
	Error            *Otcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Otcer504ApplicationJSONErrorEnum string

const (
	Otcer504ApplicationJSONErrorEnumGatewayTimeout Otcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Otcer504ApplicationJSONErrorDescriptionEnum string

const (
	Otcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Otcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Otcer504ApplicationJSON struct {
	Error            *Otcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Otcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type OtcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Otcer400ApplicationJSONObject *Otcer400ApplicationJSON
	Otcer401ApplicationJSONObject *Otcer401ApplicationJSON
	Otcer404ApplicationJSONObject *Otcer404ApplicationJSON
	Otcer500ApplicationJSONObject *Otcer500ApplicationJSON
	Otcer502ApplicationJSONObject *Otcer502ApplicationJSON
	Otcer503ApplicationJSONObject *Otcer503ApplicationJSON
	Otcer504ApplicationJSONObject *Otcer504ApplicationJSON
}
