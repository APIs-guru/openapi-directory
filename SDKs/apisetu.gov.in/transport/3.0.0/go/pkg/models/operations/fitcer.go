package operations

import (
	"openapi/pkg/models/shared"
)

type FitcerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
	ChasisNo string `json:"chasis_no"`
	RegNo    string `json:"reg_no"`
	SwdName  string `json:"swd_name"`
}

type FitcerRequestBodyFormatEnum string

const (
	FitcerRequestBodyFormatEnumXML FitcerRequestBodyFormatEnum = "xml"
	FitcerRequestBodyFormatEnumPdf FitcerRequestBodyFormatEnum = "pdf"
)

type FitcerRequestBody struct {
	CertificateParameters *FitcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                            `json:"consentArtifact,omitempty"`
	Format                FitcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                  `json:"txnId"`
}

type FitcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Fitcer400ApplicationJSONErrorEnum string

const (
	Fitcer400ApplicationJSONErrorEnumMissingParameter Fitcer400ApplicationJSONErrorEnum = "missing_parameter"
	Fitcer400ApplicationJSONErrorEnumInvalidParameter Fitcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Fitcer400ApplicationJSONErrorEnumInvalidFormat    Fitcer400ApplicationJSONErrorEnum = "invalid_format"
	Fitcer400ApplicationJSONErrorEnumInvalidTxnid     Fitcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Fitcer400ApplicationJSONErrorEnumInvalidConsentid Fitcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Fitcer400ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Fitcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Fitcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Fitcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Fitcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Fitcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Fitcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Fitcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Fitcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Fitcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Fitcer400ApplicationJSON struct {
	Error            *Fitcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer401ApplicationJSONErrorEnum string

const (
	Fitcer401ApplicationJSONErrorEnumInvalidAuthentication Fitcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Fitcer401ApplicationJSONErrorEnumInvalidAuthorization  Fitcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Fitcer401ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Fitcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Fitcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Fitcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Fitcer401ApplicationJSON struct {
	Error            *Fitcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer404ApplicationJSONErrorEnum string

const (
	Fitcer404ApplicationJSONErrorEnumRecordNotFound Fitcer404ApplicationJSONErrorEnum = "record_not_found"
	Fitcer404ApplicationJSONErrorEnumURLNotFound    Fitcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Fitcer404ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Fitcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Fitcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Fitcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Fitcer404ApplicationJSON struct {
	Error            *Fitcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer500ApplicationJSONErrorEnum string

const (
	Fitcer500ApplicationJSONErrorEnumInternalServerError Fitcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Fitcer500ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer500ApplicationJSONErrorDescriptionEnumInternalServerError Fitcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Fitcer500ApplicationJSON struct {
	Error            *Fitcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer502ApplicationJSONErrorEnum string

const (
	Fitcer502ApplicationJSONErrorEnumBadGatewy Fitcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Fitcer502ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Fitcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Fitcer502ApplicationJSON struct {
	Error            *Fitcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer503ApplicationJSONErrorEnum string

const (
	Fitcer503ApplicationJSONErrorEnumServiceUnavailable Fitcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Fitcer503ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Fitcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Fitcer503ApplicationJSON struct {
	Error            *Fitcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Fitcer504ApplicationJSONErrorEnum string

const (
	Fitcer504ApplicationJSONErrorEnumGatewayTimeout Fitcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Fitcer504ApplicationJSONErrorDescriptionEnum string

const (
	Fitcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Fitcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Fitcer504ApplicationJSON struct {
	Error            *Fitcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Fitcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type FitcerRequest struct {
	Request  *FitcerRequestBody `request:"mediaType=application/json"`
	Security FitcerSecurity
}

type FitcerResponse struct {
	Body                           []byte
	ContentType                    string
	StatusCode                     int64
	Fitcer400ApplicationJSONObject *Fitcer400ApplicationJSON
	Fitcer401ApplicationJSONObject *Fitcer401ApplicationJSON
	Fitcer404ApplicationJSONObject *Fitcer404ApplicationJSON
	Fitcer500ApplicationJSONObject *Fitcer500ApplicationJSON
	Fitcer502ApplicationJSONObject *Fitcer502ApplicationJSON
	Fitcer503ApplicationJSONObject *Fitcer503ApplicationJSON
	Fitcer504ApplicationJSONObject *Fitcer504ApplicationJSON
}
