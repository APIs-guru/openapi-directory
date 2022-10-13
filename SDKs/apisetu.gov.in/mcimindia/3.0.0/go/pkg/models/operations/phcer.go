package operations

import (
	"openapi/pkg/models/shared"
)

type PhcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegnNo   string `json:"REGN_NO"`
	UID      string `json:"UID"`
}

type PhcerRequestBodyFormatEnum string

const (
	PhcerRequestBodyFormatEnumPdf PhcerRequestBodyFormatEnum = "pdf"
)

type PhcerRequestBody struct {
	CertificateParameters *PhcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                PhcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PhcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type PhcerRequest struct {
	Request  *PhcerRequestBody `request:"mediaType=application/json"`
	Security PhcerSecurity
}

type Phcer400ApplicationJSONErrorEnum string

const (
	Phcer400ApplicationJSONErrorEnumMissingParameter Phcer400ApplicationJSONErrorEnum = "missing_parameter"
	Phcer400ApplicationJSONErrorEnumInvalidParameter Phcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Phcer400ApplicationJSONErrorEnumInvalidFormat    Phcer400ApplicationJSONErrorEnum = "invalid_format"
	Phcer400ApplicationJSONErrorEnumInvalidTxnid     Phcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Phcer400ApplicationJSONErrorEnumInvalidConsentid Phcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Phcer400ApplicationJSONErrorDescriptionEnum string

const (
	Phcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Phcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Phcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Phcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Phcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Phcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Phcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Phcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Phcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Phcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Phcer400ApplicationJSON struct {
	Error            *Phcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer401ApplicationJSONErrorEnum string

const (
	Phcer401ApplicationJSONErrorEnumInvalidAuthentication Phcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Phcer401ApplicationJSONErrorEnumInvalidAuthorization  Phcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Phcer401ApplicationJSONErrorDescriptionEnum string

const (
	Phcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Phcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Phcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Phcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Phcer401ApplicationJSON struct {
	Error            *Phcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer404ApplicationJSONErrorEnum string

const (
	Phcer404ApplicationJSONErrorEnumRecordNotFound Phcer404ApplicationJSONErrorEnum = "record_not_found"
	Phcer404ApplicationJSONErrorEnumURLNotFound    Phcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Phcer404ApplicationJSONErrorDescriptionEnum string

const (
	Phcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Phcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Phcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Phcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Phcer404ApplicationJSON struct {
	Error            *Phcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer500ApplicationJSONErrorEnum string

const (
	Phcer500ApplicationJSONErrorEnumInternalServerError Phcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Phcer500ApplicationJSONErrorDescriptionEnum string

const (
	Phcer500ApplicationJSONErrorDescriptionEnumInternalServerError Phcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Phcer500ApplicationJSON struct {
	Error            *Phcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer502ApplicationJSONErrorEnum string

const (
	Phcer502ApplicationJSONErrorEnumBadGatewy Phcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Phcer502ApplicationJSONErrorDescriptionEnum string

const (
	Phcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Phcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Phcer502ApplicationJSON struct {
	Error            *Phcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer503ApplicationJSONErrorEnum string

const (
	Phcer503ApplicationJSONErrorEnumServiceUnavailable Phcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Phcer503ApplicationJSONErrorDescriptionEnum string

const (
	Phcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Phcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Phcer503ApplicationJSON struct {
	Error            *Phcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Phcer504ApplicationJSONErrorEnum string

const (
	Phcer504ApplicationJSONErrorEnumGatewayTimeout Phcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Phcer504ApplicationJSONErrorDescriptionEnum string

const (
	Phcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Phcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Phcer504ApplicationJSON struct {
	Error            *Phcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Phcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type PhcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Phcer400ApplicationJSONObject *Phcer400ApplicationJSON
	Phcer401ApplicationJSONObject *Phcer401ApplicationJSON
	Phcer404ApplicationJSONObject *Phcer404ApplicationJSON
	Phcer500ApplicationJSONObject *Phcer500ApplicationJSON
	Phcer502ApplicationJSONObject *Phcer502ApplicationJSON
	Phcer503ApplicationJSONObject *Phcer503ApplicationJSON
	Phcer504ApplicationJSONObject *Phcer504ApplicationJSON
}
