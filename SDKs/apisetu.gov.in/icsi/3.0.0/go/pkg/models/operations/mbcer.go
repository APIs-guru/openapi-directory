package operations

import (
	"openapi/pkg/models/shared"
)

type MbcerRequestBodyCertificateParameters struct {
	CertType     string `json:"CertType"`
	FullName     string `json:"FullName"`
	MembershipNo string `json:"Membership_No"`
}

type MbcerRequestBodyFormatEnum string

const (
	MbcerRequestBodyFormatEnumPdf MbcerRequestBodyFormatEnum = "pdf"
)

type MbcerRequestBody struct {
	CertificateParameters *MbcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                MbcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type MbcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type MbcerRequest struct {
	Request  *MbcerRequestBody `request:"mediaType=application/json"`
	Security MbcerSecurity
}

type Mbcer400ApplicationJSONErrorEnum string

const (
	Mbcer400ApplicationJSONErrorEnumMissingParameter Mbcer400ApplicationJSONErrorEnum = "missing_parameter"
	Mbcer400ApplicationJSONErrorEnumInvalidParameter Mbcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Mbcer400ApplicationJSONErrorEnumInvalidFormat    Mbcer400ApplicationJSONErrorEnum = "invalid_format"
	Mbcer400ApplicationJSONErrorEnumInvalidTxnid     Mbcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Mbcer400ApplicationJSONErrorEnumInvalidConsentid Mbcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Mbcer400ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Mbcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Mbcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Mbcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Mbcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Mbcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Mbcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Mbcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Mbcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mbcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Mbcer400ApplicationJSON struct {
	Error            *Mbcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer401ApplicationJSONErrorEnum string

const (
	Mbcer401ApplicationJSONErrorEnumInvalidAuthentication Mbcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Mbcer401ApplicationJSONErrorEnumInvalidAuthorization  Mbcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Mbcer401ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Mbcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Mbcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mbcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Mbcer401ApplicationJSON struct {
	Error            *Mbcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer404ApplicationJSONErrorEnum string

const (
	Mbcer404ApplicationJSONErrorEnumRecordNotFound Mbcer404ApplicationJSONErrorEnum = "record_not_found"
	Mbcer404ApplicationJSONErrorEnumURLNotFound    Mbcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Mbcer404ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Mbcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Mbcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mbcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Mbcer404ApplicationJSON struct {
	Error            *Mbcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer500ApplicationJSONErrorEnum string

const (
	Mbcer500ApplicationJSONErrorEnumInternalServerError Mbcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Mbcer500ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer500ApplicationJSONErrorDescriptionEnumInternalServerError Mbcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Mbcer500ApplicationJSON struct {
	Error            *Mbcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer502ApplicationJSONErrorEnum string

const (
	Mbcer502ApplicationJSONErrorEnumBadGatewy Mbcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Mbcer502ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mbcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Mbcer502ApplicationJSON struct {
	Error            *Mbcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer503ApplicationJSONErrorEnum string

const (
	Mbcer503ApplicationJSONErrorEnumServiceUnavailable Mbcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Mbcer503ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mbcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Mbcer503ApplicationJSON struct {
	Error            *Mbcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Mbcer504ApplicationJSONErrorEnum string

const (
	Mbcer504ApplicationJSONErrorEnumGatewayTimeout Mbcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Mbcer504ApplicationJSONErrorDescriptionEnum string

const (
	Mbcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mbcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Mbcer504ApplicationJSON struct {
	Error            *Mbcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Mbcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type MbcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Mbcer400ApplicationJSONObject *Mbcer400ApplicationJSON
	Mbcer401ApplicationJSONObject *Mbcer401ApplicationJSON
	Mbcer404ApplicationJSONObject *Mbcer404ApplicationJSON
	Mbcer500ApplicationJSONObject *Mbcer500ApplicationJSON
	Mbcer502ApplicationJSONObject *Mbcer502ApplicationJSON
	Mbcer503ApplicationJSONObject *Mbcer503ApplicationJSON
	Mbcer504ApplicationJSONObject *Mbcer504ApplicationJSON
}
