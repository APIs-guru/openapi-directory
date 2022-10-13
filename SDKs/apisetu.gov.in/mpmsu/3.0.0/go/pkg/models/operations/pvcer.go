package operations

import (
	"openapi/pkg/models/shared"
)

type PvcerRequestBodyCertificateParameters struct {
	Appno       string `json:"APPNO"`
	DateOfBirth string `json:"Date_Of_Birth"`
	Enrolno     string `json:"ENROLNO"`
	Rollno      string `json:"ROLLNO"`
}

type PvcerRequestBodyFormatEnum string

const (
	PvcerRequestBodyFormatEnumPdf PvcerRequestBodyFormatEnum = "pdf"
)

type PvcerRequestBody struct {
	CertificateParameters *PvcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                PvcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PvcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type PvcerRequest struct {
	Request  *PvcerRequestBody `request:"mediaType=application/json"`
	Security PvcerSecurity
}

type Pvcer400ApplicationJSONErrorEnum string

const (
	Pvcer400ApplicationJSONErrorEnumMissingParameter Pvcer400ApplicationJSONErrorEnum = "missing_parameter"
	Pvcer400ApplicationJSONErrorEnumInvalidParameter Pvcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Pvcer400ApplicationJSONErrorEnumInvalidFormat    Pvcer400ApplicationJSONErrorEnum = "invalid_format"
	Pvcer400ApplicationJSONErrorEnumInvalidTxnid     Pvcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Pvcer400ApplicationJSONErrorEnumInvalidConsentid Pvcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Pvcer400ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Pvcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Pvcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Pvcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Pvcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Pvcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Pvcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Pvcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Pvcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pvcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Pvcer400ApplicationJSON struct {
	Error            *Pvcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer401ApplicationJSONErrorEnum string

const (
	Pvcer401ApplicationJSONErrorEnumInvalidAuthentication Pvcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Pvcer401ApplicationJSONErrorEnumInvalidAuthorization  Pvcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Pvcer401ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Pvcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Pvcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pvcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Pvcer401ApplicationJSON struct {
	Error            *Pvcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer404ApplicationJSONErrorEnum string

const (
	Pvcer404ApplicationJSONErrorEnumRecordNotFound Pvcer404ApplicationJSONErrorEnum = "record_not_found"
	Pvcer404ApplicationJSONErrorEnumURLNotFound    Pvcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Pvcer404ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Pvcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Pvcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pvcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Pvcer404ApplicationJSON struct {
	Error            *Pvcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer500ApplicationJSONErrorEnum string

const (
	Pvcer500ApplicationJSONErrorEnumInternalServerError Pvcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Pvcer500ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer500ApplicationJSONErrorDescriptionEnumInternalServerError Pvcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Pvcer500ApplicationJSON struct {
	Error            *Pvcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer502ApplicationJSONErrorEnum string

const (
	Pvcer502ApplicationJSONErrorEnumBadGatewy Pvcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Pvcer502ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pvcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Pvcer502ApplicationJSON struct {
	Error            *Pvcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer503ApplicationJSONErrorEnum string

const (
	Pvcer503ApplicationJSONErrorEnumServiceUnavailable Pvcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Pvcer503ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pvcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Pvcer503ApplicationJSON struct {
	Error            *Pvcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Pvcer504ApplicationJSONErrorEnum string

const (
	Pvcer504ApplicationJSONErrorEnumGatewayTimeout Pvcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Pvcer504ApplicationJSONErrorDescriptionEnum string

const (
	Pvcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pvcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Pvcer504ApplicationJSON struct {
	Error            *Pvcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Pvcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type PvcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Pvcer400ApplicationJSONObject *Pvcer400ApplicationJSON
	Pvcer401ApplicationJSONObject *Pvcer401ApplicationJSON
	Pvcer404ApplicationJSONObject *Pvcer404ApplicationJSON
	Pvcer500ApplicationJSONObject *Pvcer500ApplicationJSON
	Pvcer502ApplicationJSONObject *Pvcer502ApplicationJSON
	Pvcer503ApplicationJSONObject *Pvcer503ApplicationJSON
	Pvcer504ApplicationJSONObject *Pvcer504ApplicationJSON
}
