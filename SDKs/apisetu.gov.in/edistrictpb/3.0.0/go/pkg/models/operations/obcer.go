package operations

import (
	"openapi/pkg/models/shared"
)

type ObcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	DsnNo    string `json:"DSNNo"`
	Father   string `json:"Father"`
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
}

type ObcerRequestBodyFormatEnum string

const (
	ObcerRequestBodyFormatEnumPdf ObcerRequestBodyFormatEnum = "pdf"
)

type ObcerRequestBody struct {
	CertificateParameters *ObcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                ObcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ObcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Obcer400ApplicationJSONErrorEnum string

const (
	Obcer400ApplicationJSONErrorEnumMissingParameter Obcer400ApplicationJSONErrorEnum = "missing_parameter"
	Obcer400ApplicationJSONErrorEnumInvalidParameter Obcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Obcer400ApplicationJSONErrorEnumInvalidFormat    Obcer400ApplicationJSONErrorEnum = "invalid_format"
	Obcer400ApplicationJSONErrorEnumInvalidTxnid     Obcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Obcer400ApplicationJSONErrorEnumInvalidConsentid Obcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Obcer400ApplicationJSONErrorDescriptionEnum string

const (
	Obcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Obcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Obcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Obcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Obcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Obcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Obcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Obcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Obcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Obcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Obcer400ApplicationJSON struct {
	Error            *Obcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer401ApplicationJSONErrorEnum string

const (
	Obcer401ApplicationJSONErrorEnumInvalidAuthentication Obcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Obcer401ApplicationJSONErrorEnumInvalidAuthorization  Obcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Obcer401ApplicationJSONErrorDescriptionEnum string

const (
	Obcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Obcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Obcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Obcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Obcer401ApplicationJSON struct {
	Error            *Obcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer404ApplicationJSONErrorEnum string

const (
	Obcer404ApplicationJSONErrorEnumRecordNotFound Obcer404ApplicationJSONErrorEnum = "record_not_found"
	Obcer404ApplicationJSONErrorEnumURLNotFound    Obcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Obcer404ApplicationJSONErrorDescriptionEnum string

const (
	Obcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Obcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Obcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Obcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Obcer404ApplicationJSON struct {
	Error            *Obcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer500ApplicationJSONErrorEnum string

const (
	Obcer500ApplicationJSONErrorEnumInternalServerError Obcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Obcer500ApplicationJSONErrorDescriptionEnum string

const (
	Obcer500ApplicationJSONErrorDescriptionEnumInternalServerError Obcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Obcer500ApplicationJSON struct {
	Error            *Obcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer502ApplicationJSONErrorEnum string

const (
	Obcer502ApplicationJSONErrorEnumBadGatewy Obcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Obcer502ApplicationJSONErrorDescriptionEnum string

const (
	Obcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Obcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Obcer502ApplicationJSON struct {
	Error            *Obcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer503ApplicationJSONErrorEnum string

const (
	Obcer503ApplicationJSONErrorEnumServiceUnavailable Obcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Obcer503ApplicationJSONErrorDescriptionEnum string

const (
	Obcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Obcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Obcer503ApplicationJSON struct {
	Error            *Obcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Obcer504ApplicationJSONErrorEnum string

const (
	Obcer504ApplicationJSONErrorEnumGatewayTimeout Obcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Obcer504ApplicationJSONErrorDescriptionEnum string

const (
	Obcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Obcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Obcer504ApplicationJSON struct {
	Error            *Obcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Obcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ObcerRequest struct {
	Request  *ObcerRequestBody `request:"mediaType=application/json"`
	Security ObcerSecurity
}

type ObcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Obcer400ApplicationJSONObject *Obcer400ApplicationJSON
	Obcer401ApplicationJSONObject *Obcer401ApplicationJSON
	Obcer404ApplicationJSONObject *Obcer404ApplicationJSON
	Obcer500ApplicationJSONObject *Obcer500ApplicationJSON
	Obcer502ApplicationJSONObject *Obcer502ApplicationJSON
	Obcer503ApplicationJSONObject *Obcer503ApplicationJSON
	Obcer504ApplicationJSONObject *Obcer504ApplicationJSON
}
