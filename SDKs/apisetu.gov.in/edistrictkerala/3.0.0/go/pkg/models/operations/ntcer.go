package operations

import (
	"openapi/pkg/models/shared"
)

type NtcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type NtcerRequestBodyFormatEnum string

const (
	NtcerRequestBodyFormatEnumPdf NtcerRequestBodyFormatEnum = "pdf"
)

type NtcerRequestBody struct {
	CertificateParameters *NtcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                NtcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NtcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type NtcerRequest struct {
	Request  *NtcerRequestBody `request:"mediaType=application/json"`
	Security NtcerSecurity
}

type Ntcer400ApplicationJSONErrorEnum string

const (
	Ntcer400ApplicationJSONErrorEnumMissingParameter Ntcer400ApplicationJSONErrorEnum = "missing_parameter"
	Ntcer400ApplicationJSONErrorEnumInvalidParameter Ntcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Ntcer400ApplicationJSONErrorEnumInvalidFormat    Ntcer400ApplicationJSONErrorEnum = "invalid_format"
	Ntcer400ApplicationJSONErrorEnumInvalidTxnid     Ntcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Ntcer400ApplicationJSONErrorEnumInvalidConsentid Ntcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ntcer400ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ntcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ntcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Ntcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ntcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ntcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ntcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ntcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ntcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ntcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ntcer400ApplicationJSON struct {
	Error            *Ntcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer401ApplicationJSONErrorEnum string

const (
	Ntcer401ApplicationJSONErrorEnumInvalidAuthentication Ntcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Ntcer401ApplicationJSONErrorEnumInvalidAuthorization  Ntcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ntcer401ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ntcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ntcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ntcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ntcer401ApplicationJSON struct {
	Error            *Ntcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer404ApplicationJSONErrorEnum string

const (
	Ntcer404ApplicationJSONErrorEnumRecordNotFound Ntcer404ApplicationJSONErrorEnum = "record_not_found"
	Ntcer404ApplicationJSONErrorEnumURLNotFound    Ntcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Ntcer404ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ntcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ntcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ntcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ntcer404ApplicationJSON struct {
	Error            *Ntcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer500ApplicationJSONErrorEnum string

const (
	Ntcer500ApplicationJSONErrorEnumInternalServerError Ntcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ntcer500ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer500ApplicationJSONErrorDescriptionEnumInternalServerError Ntcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ntcer500ApplicationJSON struct {
	Error            *Ntcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer502ApplicationJSONErrorEnum string

const (
	Ntcer502ApplicationJSONErrorEnumBadGatewy Ntcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ntcer502ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ntcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ntcer502ApplicationJSON struct {
	Error            *Ntcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer503ApplicationJSONErrorEnum string

const (
	Ntcer503ApplicationJSONErrorEnumServiceUnavailable Ntcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ntcer503ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ntcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ntcer503ApplicationJSON struct {
	Error            *Ntcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ntcer504ApplicationJSONErrorEnum string

const (
	Ntcer504ApplicationJSONErrorEnumGatewayTimeout Ntcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ntcer504ApplicationJSONErrorDescriptionEnum string

const (
	Ntcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ntcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ntcer504ApplicationJSON struct {
	Error            *Ntcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ntcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type NtcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ntcer400ApplicationJSONObject *Ntcer400ApplicationJSON
	Ntcer401ApplicationJSONObject *Ntcer401ApplicationJSON
	Ntcer404ApplicationJSONObject *Ntcer404ApplicationJSON
	Ntcer500ApplicationJSONObject *Ntcer500ApplicationJSON
	Ntcer502ApplicationJSONObject *Ntcer502ApplicationJSON
	Ntcer503ApplicationJSONObject *Ntcer503ApplicationJSON
	Ntcer504ApplicationJSONObject *Ntcer504ApplicationJSON
}
