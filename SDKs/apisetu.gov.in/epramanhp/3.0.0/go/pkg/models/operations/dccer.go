package operations

import (
	"openapi/pkg/models/shared"
)

type DccerRequestBodyCertificateParameters struct {
	Name  string `json:"Name"`
	RefNo string `json:"RefNo"`
}

type DccerRequestBodyFormatEnum string

const (
	DccerRequestBodyFormatEnumPdf DccerRequestBodyFormatEnum = "pdf"
)

type DccerRequestBody struct {
	CertificateParameters *DccerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DccerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DccerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DccerRequest struct {
	Request  *DccerRequestBody `request:"mediaType=application/json"`
	Security DccerSecurity
}

type Dccer400ApplicationJSONErrorEnum string

const (
	Dccer400ApplicationJSONErrorEnumMissingParameter Dccer400ApplicationJSONErrorEnum = "missing_parameter"
	Dccer400ApplicationJSONErrorEnumInvalidParameter Dccer400ApplicationJSONErrorEnum = "invalid_parameter"
	Dccer400ApplicationJSONErrorEnumInvalidFormat    Dccer400ApplicationJSONErrorEnum = "invalid_format"
	Dccer400ApplicationJSONErrorEnumInvalidTxnid     Dccer400ApplicationJSONErrorEnum = "invalid_txnid"
	Dccer400ApplicationJSONErrorEnumInvalidConsentid Dccer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dccer400ApplicationJSONErrorDescriptionEnum string

const (
	Dccer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dccer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dccer400ApplicationJSONErrorDescriptionEnumBadRequest                              Dccer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dccer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dccer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dccer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dccer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dccer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dccer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dccer400ApplicationJSON struct {
	Error            *Dccer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer401ApplicationJSONErrorEnum string

const (
	Dccer401ApplicationJSONErrorEnumInvalidAuthentication Dccer401ApplicationJSONErrorEnum = "invalid_authentication"
	Dccer401ApplicationJSONErrorEnumInvalidAuthorization  Dccer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dccer401ApplicationJSONErrorDescriptionEnum string

const (
	Dccer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dccer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dccer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dccer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dccer401ApplicationJSON struct {
	Error            *Dccer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer404ApplicationJSONErrorEnum string

const (
	Dccer404ApplicationJSONErrorEnumRecordNotFound Dccer404ApplicationJSONErrorEnum = "record_not_found"
	Dccer404ApplicationJSONErrorEnumURLNotFound    Dccer404ApplicationJSONErrorEnum = "url_not_found"
)

type Dccer404ApplicationJSONErrorDescriptionEnum string

const (
	Dccer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dccer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dccer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dccer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dccer404ApplicationJSON struct {
	Error            *Dccer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer500ApplicationJSONErrorEnum string

const (
	Dccer500ApplicationJSONErrorEnumInternalServerError Dccer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dccer500ApplicationJSONErrorDescriptionEnum string

const (
	Dccer500ApplicationJSONErrorDescriptionEnumInternalServerError Dccer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dccer500ApplicationJSON struct {
	Error            *Dccer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer502ApplicationJSONErrorEnum string

const (
	Dccer502ApplicationJSONErrorEnumBadGatewy Dccer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dccer502ApplicationJSONErrorDescriptionEnum string

const (
	Dccer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dccer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dccer502ApplicationJSON struct {
	Error            *Dccer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer503ApplicationJSONErrorEnum string

const (
	Dccer503ApplicationJSONErrorEnumServiceUnavailable Dccer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dccer503ApplicationJSONErrorDescriptionEnum string

const (
	Dccer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dccer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dccer503ApplicationJSON struct {
	Error            *Dccer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dccer504ApplicationJSONErrorEnum string

const (
	Dccer504ApplicationJSONErrorEnumGatewayTimeout Dccer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dccer504ApplicationJSONErrorDescriptionEnum string

const (
	Dccer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dccer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dccer504ApplicationJSON struct {
	Error            *Dccer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dccer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DccerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dccer400ApplicationJSONObject *Dccer400ApplicationJSON
	Dccer401ApplicationJSONObject *Dccer401ApplicationJSON
	Dccer404ApplicationJSONObject *Dccer404ApplicationJSON
	Dccer500ApplicationJSONObject *Dccer500ApplicationJSON
	Dccer502ApplicationJSONObject *Dccer502ApplicationJSON
	Dccer503ApplicationJSONObject *Dccer503ApplicationJSON
	Dccer504ApplicationJSONObject *Dccer504ApplicationJSON
}
