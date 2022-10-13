package operations

import (
	"openapi/pkg/models/shared"
)

type VhinscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
	ChasisNo string `json:"chasis_no"`
	RegNo    string `json:"reg_no"`
	SwdName  string `json:"swd_name"`
}

type VhinscRequestBodyFormatEnum string

const (
	VhinscRequestBodyFormatEnumPdf VhinscRequestBodyFormatEnum = "pdf"
)

type VhinscRequestBody struct {
	CertificateParameters *VhinscRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                            `json:"consentArtifact"`
	Format                VhinscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                  `json:"txnId"`
}

type VhinscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type VhinscRequest struct {
	Request  *VhinscRequestBody `request:"mediaType=application/json"`
	Security VhinscSecurity
}

type Vhinsc400ApplicationJSONErrorEnum string

const (
	Vhinsc400ApplicationJSONErrorEnumMissingParameter Vhinsc400ApplicationJSONErrorEnum = "missing_parameter"
	Vhinsc400ApplicationJSONErrorEnumInvalidParameter Vhinsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Vhinsc400ApplicationJSONErrorEnumInvalidFormat    Vhinsc400ApplicationJSONErrorEnum = "invalid_format"
	Vhinsc400ApplicationJSONErrorEnumInvalidTxnid     Vhinsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Vhinsc400ApplicationJSONErrorEnumInvalidConsentid Vhinsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Vhinsc400ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Vhinsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Vhinsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Vhinsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Vhinsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Vhinsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Vhinsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Vhinsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Vhinsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Vhinsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Vhinsc400ApplicationJSON struct {
	Error            *Vhinsc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc401ApplicationJSONErrorEnum string

const (
	Vhinsc401ApplicationJSONErrorEnumInvalidAuthentication Vhinsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Vhinsc401ApplicationJSONErrorEnumInvalidAuthorization  Vhinsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Vhinsc401ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Vhinsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Vhinsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Vhinsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Vhinsc401ApplicationJSON struct {
	Error            *Vhinsc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc404ApplicationJSONErrorEnum string

const (
	Vhinsc404ApplicationJSONErrorEnumRecordNotFound Vhinsc404ApplicationJSONErrorEnum = "record_not_found"
	Vhinsc404ApplicationJSONErrorEnumURLNotFound    Vhinsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Vhinsc404ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Vhinsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Vhinsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Vhinsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Vhinsc404ApplicationJSON struct {
	Error            *Vhinsc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc500ApplicationJSONErrorEnum string

const (
	Vhinsc500ApplicationJSONErrorEnumInternalServerError Vhinsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Vhinsc500ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc500ApplicationJSONErrorDescriptionEnumInternalServerError Vhinsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Vhinsc500ApplicationJSON struct {
	Error            *Vhinsc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc502ApplicationJSONErrorEnum string

const (
	Vhinsc502ApplicationJSONErrorEnumBadGatewy Vhinsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Vhinsc502ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Vhinsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Vhinsc502ApplicationJSON struct {
	Error            *Vhinsc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc503ApplicationJSONErrorEnum string

const (
	Vhinsc503ApplicationJSONErrorEnumServiceUnavailable Vhinsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Vhinsc503ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Vhinsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Vhinsc503ApplicationJSON struct {
	Error            *Vhinsc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Vhinsc504ApplicationJSONErrorEnum string

const (
	Vhinsc504ApplicationJSONErrorEnumGatewayTimeout Vhinsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Vhinsc504ApplicationJSONErrorDescriptionEnum string

const (
	Vhinsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Vhinsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Vhinsc504ApplicationJSON struct {
	Error            *Vhinsc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Vhinsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type VhinscResponse struct {
	ContentType                    string
	StatusCode                     int64
	Vhinsc400ApplicationJSONObject *Vhinsc400ApplicationJSON
	Vhinsc401ApplicationJSONObject *Vhinsc401ApplicationJSON
	Vhinsc404ApplicationJSONObject *Vhinsc404ApplicationJSON
	Vhinsc500ApplicationJSONObject *Vhinsc500ApplicationJSON
	Vhinsc502ApplicationJSONObject *Vhinsc502ApplicationJSON
	Vhinsc503ApplicationJSONObject *Vhinsc503ApplicationJSON
	Vhinsc504ApplicationJSONObject *Vhinsc504ApplicationJSON
}
