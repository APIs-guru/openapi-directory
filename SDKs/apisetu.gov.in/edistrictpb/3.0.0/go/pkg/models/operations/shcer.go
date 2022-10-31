package operations

import (
	"openapi/pkg/models/shared"
)

type ShcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	DsnNo    string `json:"DSNNo"`
	Father   string `json:"Father"`
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
}

type ShcerRequestBodyFormatEnum string

const (
	ShcerRequestBodyFormatEnumPdf ShcerRequestBodyFormatEnum = "pdf"
)

type ShcerRequestBody struct {
	CertificateParameters *ShcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                ShcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ShcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ShcerRequest struct {
	Request  *ShcerRequestBody `request:"mediaType=application/json"`
	Security ShcerSecurity
}

type Shcer400ApplicationJSONErrorEnum string

const (
	Shcer400ApplicationJSONErrorEnumMissingParameter Shcer400ApplicationJSONErrorEnum = "missing_parameter"
	Shcer400ApplicationJSONErrorEnumInvalidParameter Shcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Shcer400ApplicationJSONErrorEnumInvalidFormat    Shcer400ApplicationJSONErrorEnum = "invalid_format"
	Shcer400ApplicationJSONErrorEnumInvalidTxnid     Shcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Shcer400ApplicationJSONErrorEnumInvalidConsentid Shcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Shcer400ApplicationJSONErrorDescriptionEnum string

const (
	Shcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Shcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Shcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Shcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Shcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Shcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Shcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Shcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Shcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Shcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Shcer400ApplicationJSON struct {
	Error            *Shcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer401ApplicationJSONErrorEnum string

const (
	Shcer401ApplicationJSONErrorEnumInvalidAuthentication Shcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Shcer401ApplicationJSONErrorEnumInvalidAuthorization  Shcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Shcer401ApplicationJSONErrorDescriptionEnum string

const (
	Shcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Shcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Shcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Shcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Shcer401ApplicationJSON struct {
	Error            *Shcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer404ApplicationJSONErrorEnum string

const (
	Shcer404ApplicationJSONErrorEnumRecordNotFound Shcer404ApplicationJSONErrorEnum = "record_not_found"
	Shcer404ApplicationJSONErrorEnumURLNotFound    Shcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Shcer404ApplicationJSONErrorDescriptionEnum string

const (
	Shcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Shcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Shcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Shcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Shcer404ApplicationJSON struct {
	Error            *Shcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer500ApplicationJSONErrorEnum string

const (
	Shcer500ApplicationJSONErrorEnumInternalServerError Shcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Shcer500ApplicationJSONErrorDescriptionEnum string

const (
	Shcer500ApplicationJSONErrorDescriptionEnumInternalServerError Shcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Shcer500ApplicationJSON struct {
	Error            *Shcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer502ApplicationJSONErrorEnum string

const (
	Shcer502ApplicationJSONErrorEnumBadGatewy Shcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Shcer502ApplicationJSONErrorDescriptionEnum string

const (
	Shcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Shcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Shcer502ApplicationJSON struct {
	Error            *Shcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer503ApplicationJSONErrorEnum string

const (
	Shcer503ApplicationJSONErrorEnumServiceUnavailable Shcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Shcer503ApplicationJSONErrorDescriptionEnum string

const (
	Shcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Shcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Shcer503ApplicationJSON struct {
	Error            *Shcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Shcer504ApplicationJSONErrorEnum string

const (
	Shcer504ApplicationJSONErrorEnumGatewayTimeout Shcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Shcer504ApplicationJSONErrorDescriptionEnum string

const (
	Shcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Shcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Shcer504ApplicationJSON struct {
	Error            *Shcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Shcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ShcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Shcer400ApplicationJSONObject *Shcer400ApplicationJSON
	Shcer401ApplicationJSONObject *Shcer401ApplicationJSON
	Shcer404ApplicationJSONObject *Shcer404ApplicationJSON
	Shcer500ApplicationJSONObject *Shcer500ApplicationJSON
	Shcer502ApplicationJSONObject *Shcer502ApplicationJSON
	Shcer503ApplicationJSONObject *Shcer503ApplicationJSON
	Shcer504ApplicationJSONObject *Shcer504ApplicationJSON
}
