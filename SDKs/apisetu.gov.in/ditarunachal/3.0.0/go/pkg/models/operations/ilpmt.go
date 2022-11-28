package operations

import (
	"openapi/pkg/models/shared"
)

type IlpmtRequestBodyCertificateParameters struct {
	FullName          string `json:"FullName"`
	UID               string `json:"UID"`
	EIlpAppID         string `json:"eILPAppId"`
	EIlpContactNumber string `json:"eILPContactNumber"`
}

type IlpmtRequestBodyFormatEnum string

const (
	IlpmtRequestBodyFormatEnumPdf IlpmtRequestBodyFormatEnum = "pdf"
)

type IlpmtRequestBody struct {
	CertificateParameters *IlpmtRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                IlpmtRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type IlpmtSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ilpmt400ApplicationJSONErrorEnum string

const (
	Ilpmt400ApplicationJSONErrorEnumMissingParameter Ilpmt400ApplicationJSONErrorEnum = "missing_parameter"
	Ilpmt400ApplicationJSONErrorEnumInvalidParameter Ilpmt400ApplicationJSONErrorEnum = "invalid_parameter"
	Ilpmt400ApplicationJSONErrorEnumInvalidFormat    Ilpmt400ApplicationJSONErrorEnum = "invalid_format"
	Ilpmt400ApplicationJSONErrorEnumInvalidTxnid     Ilpmt400ApplicationJSONErrorEnum = "invalid_txnid"
	Ilpmt400ApplicationJSONErrorEnumInvalidConsentid Ilpmt400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ilpmt400ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ilpmt400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ilpmt400ApplicationJSONErrorDescriptionEnumBadRequest                              Ilpmt400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ilpmt400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ilpmt400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ilpmt400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ilpmt400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ilpmt400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ilpmt400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ilpmt400ApplicationJSON struct {
	Error            *Ilpmt400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt401ApplicationJSONErrorEnum string

const (
	Ilpmt401ApplicationJSONErrorEnumInvalidAuthentication Ilpmt401ApplicationJSONErrorEnum = "invalid_authentication"
	Ilpmt401ApplicationJSONErrorEnumInvalidAuthorization  Ilpmt401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ilpmt401ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ilpmt401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ilpmt401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ilpmt401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ilpmt401ApplicationJSON struct {
	Error            *Ilpmt401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt404ApplicationJSONErrorEnum string

const (
	Ilpmt404ApplicationJSONErrorEnumRecordNotFound Ilpmt404ApplicationJSONErrorEnum = "record_not_found"
	Ilpmt404ApplicationJSONErrorEnumURLNotFound    Ilpmt404ApplicationJSONErrorEnum = "url_not_found"
)

type Ilpmt404ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ilpmt404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ilpmt404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ilpmt404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ilpmt404ApplicationJSON struct {
	Error            *Ilpmt404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt500ApplicationJSONErrorEnum string

const (
	Ilpmt500ApplicationJSONErrorEnumInternalServerError Ilpmt500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ilpmt500ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt500ApplicationJSONErrorDescriptionEnumInternalServerError Ilpmt500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ilpmt500ApplicationJSON struct {
	Error            *Ilpmt500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt502ApplicationJSONErrorEnum string

const (
	Ilpmt502ApplicationJSONErrorEnumBadGatewy Ilpmt502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ilpmt502ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ilpmt502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ilpmt502ApplicationJSON struct {
	Error            *Ilpmt502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt503ApplicationJSONErrorEnum string

const (
	Ilpmt503ApplicationJSONErrorEnumServiceUnavailable Ilpmt503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ilpmt503ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ilpmt503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ilpmt503ApplicationJSON struct {
	Error            *Ilpmt503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ilpmt504ApplicationJSONErrorEnum string

const (
	Ilpmt504ApplicationJSONErrorEnumGatewayTimeout Ilpmt504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ilpmt504ApplicationJSONErrorDescriptionEnum string

const (
	Ilpmt504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ilpmt504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ilpmt504ApplicationJSON struct {
	Error            *Ilpmt504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ilpmt504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type IlpmtRequest struct {
	Request  *IlpmtRequestBody `request:"mediaType=application/json"`
	Security IlpmtSecurity
}

type IlpmtResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ilpmt400ApplicationJSONObject *Ilpmt400ApplicationJSON
	Ilpmt401ApplicationJSONObject *Ilpmt401ApplicationJSON
	Ilpmt404ApplicationJSONObject *Ilpmt404ApplicationJSON
	Ilpmt500ApplicationJSONObject *Ilpmt500ApplicationJSON
	Ilpmt502ApplicationJSONObject *Ilpmt502ApplicationJSON
	Ilpmt503ApplicationJSONObject *Ilpmt503ApplicationJSON
	Ilpmt504ApplicationJSONObject *Ilpmt504ApplicationJSON
}
