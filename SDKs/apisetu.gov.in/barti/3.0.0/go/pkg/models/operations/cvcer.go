package operations

import (
	"openapi/pkg/models/shared"
)

type CvcerRequestBodyCertificateParameters struct {
	Dob  string `json:"DOB"`
	VcNo string `json:"VCNo"`
}

type CvcerRequestBodyFormatEnum string

const (
	CvcerRequestBodyFormatEnumPdf CvcerRequestBodyFormatEnum = "pdf"
)

type CvcerRequestBody struct {
	CertificateParameters *CvcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CvcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CvcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CvcerRequest struct {
	Request  *CvcerRequestBody `request:"mediaType=application/json"`
	Security CvcerSecurity
}

type Cvcer400ApplicationJSONErrorEnum string

const (
	Cvcer400ApplicationJSONErrorEnumMissingParameter Cvcer400ApplicationJSONErrorEnum = "missing_parameter"
	Cvcer400ApplicationJSONErrorEnumInvalidParameter Cvcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Cvcer400ApplicationJSONErrorEnumInvalidFormat    Cvcer400ApplicationJSONErrorEnum = "invalid_format"
	Cvcer400ApplicationJSONErrorEnumInvalidTxnid     Cvcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Cvcer400ApplicationJSONErrorEnumInvalidConsentid Cvcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cvcer400ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cvcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cvcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Cvcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cvcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cvcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cvcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cvcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cvcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cvcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cvcer400ApplicationJSON struct {
	Error            *Cvcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer401ApplicationJSONErrorEnum string

const (
	Cvcer401ApplicationJSONErrorEnumInvalidAuthentication Cvcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Cvcer401ApplicationJSONErrorEnumInvalidAuthorization  Cvcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cvcer401ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cvcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cvcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cvcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cvcer401ApplicationJSON struct {
	Error            *Cvcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer404ApplicationJSONErrorEnum string

const (
	Cvcer404ApplicationJSONErrorEnumRecordNotFound Cvcer404ApplicationJSONErrorEnum = "record_not_found"
	Cvcer404ApplicationJSONErrorEnumURLNotFound    Cvcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Cvcer404ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cvcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cvcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cvcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cvcer404ApplicationJSON struct {
	Error            *Cvcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer500ApplicationJSONErrorEnum string

const (
	Cvcer500ApplicationJSONErrorEnumInternalServerError Cvcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cvcer500ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer500ApplicationJSONErrorDescriptionEnumInternalServerError Cvcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cvcer500ApplicationJSON struct {
	Error            *Cvcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer502ApplicationJSONErrorEnum string

const (
	Cvcer502ApplicationJSONErrorEnumBadGatewy Cvcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cvcer502ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cvcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cvcer502ApplicationJSON struct {
	Error            *Cvcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer503ApplicationJSONErrorEnum string

const (
	Cvcer503ApplicationJSONErrorEnumServiceUnavailable Cvcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cvcer503ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cvcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cvcer503ApplicationJSON struct {
	Error            *Cvcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cvcer504ApplicationJSONErrorEnum string

const (
	Cvcer504ApplicationJSONErrorEnumGatewayTimeout Cvcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cvcer504ApplicationJSONErrorDescriptionEnum string

const (
	Cvcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cvcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cvcer504ApplicationJSON struct {
	Error            *Cvcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cvcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CvcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cvcer400ApplicationJSONObject *Cvcer400ApplicationJSON
	Cvcer401ApplicationJSONObject *Cvcer401ApplicationJSON
	Cvcer404ApplicationJSONObject *Cvcer404ApplicationJSON
	Cvcer500ApplicationJSONObject *Cvcer500ApplicationJSON
	Cvcer502ApplicationJSONObject *Cvcer502ApplicationJSON
	Cvcer503ApplicationJSONObject *Cvcer503ApplicationJSON
	Cvcer504ApplicationJSONObject *Cvcer504ApplicationJSON
}
