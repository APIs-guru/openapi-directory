package operations

import (
	"openapi/pkg/models/shared"
)

type HscerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Passyr   string `json:"PASSYR"`
	Regno    string `json:"REGNO"`
	UID      string `json:"UID"`
}

type HscerRequestBodyFormatEnum string

const (
	HscerRequestBodyFormatEnumPdf HscerRequestBodyFormatEnum = "pdf"
)

type HscerRequestBody struct {
	CertificateParameters *HscerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                HscerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type HscerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type HscerRequest struct {
	Request  *HscerRequestBody `request:"mediaType=application/json"`
	Security HscerSecurity
}

type Hscer400ApplicationJSONErrorEnum string

const (
	Hscer400ApplicationJSONErrorEnumMissingParameter Hscer400ApplicationJSONErrorEnum = "missing_parameter"
	Hscer400ApplicationJSONErrorEnumInvalidParameter Hscer400ApplicationJSONErrorEnum = "invalid_parameter"
	Hscer400ApplicationJSONErrorEnumInvalidFormat    Hscer400ApplicationJSONErrorEnum = "invalid_format"
	Hscer400ApplicationJSONErrorEnumInvalidTxnid     Hscer400ApplicationJSONErrorEnum = "invalid_txnid"
	Hscer400ApplicationJSONErrorEnumInvalidConsentid Hscer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Hscer400ApplicationJSONErrorDescriptionEnum string

const (
	Hscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Hscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Hscer400ApplicationJSONErrorDescriptionEnumBadRequest                              Hscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Hscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Hscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Hscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Hscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Hscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Hscer400ApplicationJSON struct {
	Error            *Hscer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer401ApplicationJSONErrorEnum string

const (
	Hscer401ApplicationJSONErrorEnumInvalidAuthentication Hscer401ApplicationJSONErrorEnum = "invalid_authentication"
	Hscer401ApplicationJSONErrorEnumInvalidAuthorization  Hscer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Hscer401ApplicationJSONErrorDescriptionEnum string

const (
	Hscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Hscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Hscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Hscer401ApplicationJSON struct {
	Error            *Hscer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer404ApplicationJSONErrorEnum string

const (
	Hscer404ApplicationJSONErrorEnumRecordNotFound Hscer404ApplicationJSONErrorEnum = "record_not_found"
	Hscer404ApplicationJSONErrorEnumURLNotFound    Hscer404ApplicationJSONErrorEnum = "url_not_found"
)

type Hscer404ApplicationJSONErrorDescriptionEnum string

const (
	Hscer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Hscer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Hscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Hscer404ApplicationJSON struct {
	Error            *Hscer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer500ApplicationJSONErrorEnum string

const (
	Hscer500ApplicationJSONErrorEnumInternalServerError Hscer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Hscer500ApplicationJSONErrorDescriptionEnum string

const (
	Hscer500ApplicationJSONErrorDescriptionEnumInternalServerError Hscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Hscer500ApplicationJSON struct {
	Error            *Hscer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer502ApplicationJSONErrorEnum string

const (
	Hscer502ApplicationJSONErrorEnumBadGatewy Hscer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Hscer502ApplicationJSONErrorDescriptionEnum string

const (
	Hscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Hscer502ApplicationJSON struct {
	Error            *Hscer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer503ApplicationJSONErrorEnum string

const (
	Hscer503ApplicationJSONErrorEnumServiceUnavailable Hscer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Hscer503ApplicationJSONErrorDescriptionEnum string

const (
	Hscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Hscer503ApplicationJSON struct {
	Error            *Hscer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hscer504ApplicationJSONErrorEnum string

const (
	Hscer504ApplicationJSONErrorEnumGatewayTimeout Hscer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Hscer504ApplicationJSONErrorDescriptionEnum string

const (
	Hscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Hscer504ApplicationJSON struct {
	Error            *Hscer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type HscerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Hscer400ApplicationJSONObject *Hscer400ApplicationJSON
	Hscer401ApplicationJSONObject *Hscer401ApplicationJSON
	Hscer404ApplicationJSONObject *Hscer404ApplicationJSON
	Hscer500ApplicationJSONObject *Hscer500ApplicationJSON
	Hscer502ApplicationJSONObject *Hscer502ApplicationJSON
	Hscer503ApplicationJSONObject *Hscer503ApplicationJSON
	Hscer504ApplicationJSONObject *Hscer504ApplicationJSON
}
