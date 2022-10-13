package operations

import (
	"openapi/pkg/models/shared"
)

type SpcerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollcode string `json:"rollcode"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type SpcerRequestBodyFormatEnum string

const (
	SpcerRequestBodyFormatEnumPdf SpcerRequestBodyFormatEnum = "pdf"
)

type SpcerRequestBody struct {
	CertificateParameters *SpcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                SpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SpcerRequest struct {
	Request  *SpcerRequestBody `request:"mediaType=application/json"`
	Security SpcerSecurity
}

type Spcer400ApplicationJSONErrorEnum string

const (
	Spcer400ApplicationJSONErrorEnumMissingParameter Spcer400ApplicationJSONErrorEnum = "missing_parameter"
	Spcer400ApplicationJSONErrorEnumInvalidParameter Spcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Spcer400ApplicationJSONErrorEnumInvalidFormat    Spcer400ApplicationJSONErrorEnum = "invalid_format"
	Spcer400ApplicationJSONErrorEnumInvalidTxnid     Spcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Spcer400ApplicationJSONErrorEnumInvalidConsentid Spcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Spcer400ApplicationJSONErrorDescriptionEnum string

const (
	Spcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Spcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Spcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Spcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Spcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Spcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Spcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Spcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Spcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Spcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Spcer400ApplicationJSON struct {
	Error            *Spcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer401ApplicationJSONErrorEnum string

const (
	Spcer401ApplicationJSONErrorEnumInvalidAuthentication Spcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Spcer401ApplicationJSONErrorEnumInvalidAuthorization  Spcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Spcer401ApplicationJSONErrorDescriptionEnum string

const (
	Spcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Spcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Spcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Spcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Spcer401ApplicationJSON struct {
	Error            *Spcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer404ApplicationJSONErrorEnum string

const (
	Spcer404ApplicationJSONErrorEnumRecordNotFound Spcer404ApplicationJSONErrorEnum = "record_not_found"
	Spcer404ApplicationJSONErrorEnumURLNotFound    Spcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Spcer404ApplicationJSONErrorDescriptionEnum string

const (
	Spcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Spcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Spcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Spcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Spcer404ApplicationJSON struct {
	Error            *Spcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer500ApplicationJSONErrorEnum string

const (
	Spcer500ApplicationJSONErrorEnumInternalServerError Spcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Spcer500ApplicationJSONErrorDescriptionEnum string

const (
	Spcer500ApplicationJSONErrorDescriptionEnumInternalServerError Spcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Spcer500ApplicationJSON struct {
	Error            *Spcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer502ApplicationJSONErrorEnum string

const (
	Spcer502ApplicationJSONErrorEnumBadGatewy Spcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Spcer502ApplicationJSONErrorDescriptionEnum string

const (
	Spcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Spcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Spcer502ApplicationJSON struct {
	Error            *Spcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer503ApplicationJSONErrorEnum string

const (
	Spcer503ApplicationJSONErrorEnumServiceUnavailable Spcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Spcer503ApplicationJSONErrorDescriptionEnum string

const (
	Spcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Spcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Spcer503ApplicationJSON struct {
	Error            *Spcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Spcer504ApplicationJSONErrorEnum string

const (
	Spcer504ApplicationJSONErrorEnumGatewayTimeout Spcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Spcer504ApplicationJSONErrorDescriptionEnum string

const (
	Spcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Spcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Spcer504ApplicationJSON struct {
	Error            *Spcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Spcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type SpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Spcer400ApplicationJSONObject *Spcer400ApplicationJSON
	Spcer401ApplicationJSONObject *Spcer401ApplicationJSON
	Spcer404ApplicationJSONObject *Spcer404ApplicationJSON
	Spcer500ApplicationJSONObject *Spcer500ApplicationJSON
	Spcer502ApplicationJSONObject *Spcer502ApplicationJSON
	Spcer503ApplicationJSONObject *Spcer503ApplicationJSON
	Spcer504ApplicationJSONObject *Spcer504ApplicationJSON
}
