package operations

import (
	"openapi/pkg/models/shared"
)

type SrcerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type SrcerRequestBodyFormatEnum string

const (
	SrcerRequestBodyFormatEnumPdf SrcerRequestBodyFormatEnum = "pdf"
)

type SrcerRequestBody struct {
	CertificateParameters *SrcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SrcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SrcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SrcerRequest struct {
	Request  *SrcerRequestBody `request:"mediaType=application/json"`
	Security SrcerSecurity
}

type Srcer400ApplicationJSONErrorEnum string

const (
	Srcer400ApplicationJSONErrorEnumMissingParameter Srcer400ApplicationJSONErrorEnum = "missing_parameter"
	Srcer400ApplicationJSONErrorEnumInvalidParameter Srcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Srcer400ApplicationJSONErrorEnumInvalidFormat    Srcer400ApplicationJSONErrorEnum = "invalid_format"
	Srcer400ApplicationJSONErrorEnumInvalidTxnid     Srcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Srcer400ApplicationJSONErrorEnumInvalidConsentid Srcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Srcer400ApplicationJSONErrorDescriptionEnum string

const (
	Srcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Srcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Srcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Srcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Srcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Srcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Srcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Srcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Srcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Srcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Srcer400ApplicationJSON struct {
	Error            *Srcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer401ApplicationJSONErrorEnum string

const (
	Srcer401ApplicationJSONErrorEnumInvalidAuthentication Srcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Srcer401ApplicationJSONErrorEnumInvalidAuthorization  Srcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Srcer401ApplicationJSONErrorDescriptionEnum string

const (
	Srcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Srcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Srcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Srcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Srcer401ApplicationJSON struct {
	Error            *Srcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer404ApplicationJSONErrorEnum string

const (
	Srcer404ApplicationJSONErrorEnumRecordNotFound Srcer404ApplicationJSONErrorEnum = "record_not_found"
	Srcer404ApplicationJSONErrorEnumURLNotFound    Srcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Srcer404ApplicationJSONErrorDescriptionEnum string

const (
	Srcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Srcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Srcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Srcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Srcer404ApplicationJSON struct {
	Error            *Srcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer500ApplicationJSONErrorEnum string

const (
	Srcer500ApplicationJSONErrorEnumInternalServerError Srcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Srcer500ApplicationJSONErrorDescriptionEnum string

const (
	Srcer500ApplicationJSONErrorDescriptionEnumInternalServerError Srcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Srcer500ApplicationJSON struct {
	Error            *Srcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer502ApplicationJSONErrorEnum string

const (
	Srcer502ApplicationJSONErrorEnumBadGatewy Srcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Srcer502ApplicationJSONErrorDescriptionEnum string

const (
	Srcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Srcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Srcer502ApplicationJSON struct {
	Error            *Srcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer503ApplicationJSONErrorEnum string

const (
	Srcer503ApplicationJSONErrorEnumServiceUnavailable Srcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Srcer503ApplicationJSONErrorDescriptionEnum string

const (
	Srcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Srcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Srcer503ApplicationJSON struct {
	Error            *Srcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Srcer504ApplicationJSONErrorEnum string

const (
	Srcer504ApplicationJSONErrorEnumGatewayTimeout Srcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Srcer504ApplicationJSONErrorDescriptionEnum string

const (
	Srcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Srcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Srcer504ApplicationJSON struct {
	Error            *Srcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Srcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SrcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Srcer400ApplicationJSONObject *Srcer400ApplicationJSON
	Srcer401ApplicationJSONObject *Srcer401ApplicationJSON
	Srcer404ApplicationJSONObject *Srcer404ApplicationJSON
	Srcer500ApplicationJSONObject *Srcer500ApplicationJSON
	Srcer502ApplicationJSONObject *Srcer502ApplicationJSON
	Srcer503ApplicationJSONObject *Srcer503ApplicationJSON
	Srcer504ApplicationJSONObject *Srcer504ApplicationJSON
}
