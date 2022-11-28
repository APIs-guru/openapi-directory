package operations

import (
	"openapi/pkg/models/shared"
)

type DrvlcRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Dlno     string `json:"dlno"`
}

type DrvlcRequestBodyFormatEnum string

const (
	DrvlcRequestBodyFormatEnumXML DrvlcRequestBodyFormatEnum = "xml"
	DrvlcRequestBodyFormatEnumPdf DrvlcRequestBodyFormatEnum = "pdf"
)

type DrvlcRequestBody struct {
	CertificateParameters *DrvlcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DrvlcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DrvlcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Drvlc400ApplicationJSONErrorEnum string

const (
	Drvlc400ApplicationJSONErrorEnumMissingParameter Drvlc400ApplicationJSONErrorEnum = "missing_parameter"
	Drvlc400ApplicationJSONErrorEnumInvalidParameter Drvlc400ApplicationJSONErrorEnum = "invalid_parameter"
	Drvlc400ApplicationJSONErrorEnumInvalidFormat    Drvlc400ApplicationJSONErrorEnum = "invalid_format"
	Drvlc400ApplicationJSONErrorEnumInvalidTxnid     Drvlc400ApplicationJSONErrorEnum = "invalid_txnid"
	Drvlc400ApplicationJSONErrorEnumInvalidConsentid Drvlc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Drvlc400ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Drvlc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Drvlc400ApplicationJSONErrorDescriptionEnumBadRequest                              Drvlc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Drvlc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Drvlc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Drvlc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Drvlc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Drvlc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Drvlc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Drvlc400ApplicationJSON struct {
	Error            *Drvlc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc401ApplicationJSONErrorEnum string

const (
	Drvlc401ApplicationJSONErrorEnumInvalidAuthentication Drvlc401ApplicationJSONErrorEnum = "invalid_authentication"
	Drvlc401ApplicationJSONErrorEnumInvalidAuthorization  Drvlc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Drvlc401ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Drvlc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Drvlc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Drvlc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Drvlc401ApplicationJSON struct {
	Error            *Drvlc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc404ApplicationJSONErrorEnum string

const (
	Drvlc404ApplicationJSONErrorEnumRecordNotFound Drvlc404ApplicationJSONErrorEnum = "record_not_found"
	Drvlc404ApplicationJSONErrorEnumURLNotFound    Drvlc404ApplicationJSONErrorEnum = "url_not_found"
)

type Drvlc404ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Drvlc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Drvlc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Drvlc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Drvlc404ApplicationJSON struct {
	Error            *Drvlc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc500ApplicationJSONErrorEnum string

const (
	Drvlc500ApplicationJSONErrorEnumInternalServerError Drvlc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Drvlc500ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc500ApplicationJSONErrorDescriptionEnumInternalServerError Drvlc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Drvlc500ApplicationJSON struct {
	Error            *Drvlc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc502ApplicationJSONErrorEnum string

const (
	Drvlc502ApplicationJSONErrorEnumBadGatewy Drvlc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Drvlc502ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Drvlc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Drvlc502ApplicationJSON struct {
	Error            *Drvlc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc503ApplicationJSONErrorEnum string

const (
	Drvlc503ApplicationJSONErrorEnumServiceUnavailable Drvlc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Drvlc503ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Drvlc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Drvlc503ApplicationJSON struct {
	Error            *Drvlc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Drvlc504ApplicationJSONErrorEnum string

const (
	Drvlc504ApplicationJSONErrorEnumGatewayTimeout Drvlc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Drvlc504ApplicationJSONErrorDescriptionEnum string

const (
	Drvlc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Drvlc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Drvlc504ApplicationJSON struct {
	Error            *Drvlc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Drvlc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DrvlcRequest struct {
	Request  *DrvlcRequestBody `request:"mediaType=application/json"`
	Security DrvlcSecurity
}

type DrvlcResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Drvlc400ApplicationJSONObject *Drvlc400ApplicationJSON
	Drvlc401ApplicationJSONObject *Drvlc401ApplicationJSON
	Drvlc404ApplicationJSONObject *Drvlc404ApplicationJSON
	Drvlc500ApplicationJSONObject *Drvlc500ApplicationJSON
	Drvlc502ApplicationJSONObject *Drvlc502ApplicationJSON
	Drvlc503ApplicationJSONObject *Drvlc503ApplicationJSON
	Drvlc504ApplicationJSONObject *Drvlc504ApplicationJSON
}
