package operations

import (
"openapi/pkg/models/shared")

type LccepRequestBodyCertificateParameters struct {
    CertificateNumber string `json:"CertificateNumber"`
    
}


type LccepRequestBodyFormatEnum string

const (
    LccepRequestBodyFormatEnumPdf LccepRequestBodyFormatEnum = "pdf"
)


type LccepRequestBody struct {
    CertificateParameters *LccepRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format LccepRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type LccepSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type LccepRequest struct {
    Request *LccepRequestBody `request:"mediaType=application/json"`
    Security LccepSecurity 
    
}


type Lccep400ApplicationJSONErrorEnum string

const (
    Lccep400ApplicationJSONErrorEnumMissingParameter Lccep400ApplicationJSONErrorEnum = "missing_parameter"
Lccep400ApplicationJSONErrorEnumInvalidParameter Lccep400ApplicationJSONErrorEnum = "invalid_parameter"
Lccep400ApplicationJSONErrorEnumInvalidFormat Lccep400ApplicationJSONErrorEnum = "invalid_format"
Lccep400ApplicationJSONErrorEnumInvalidTxnid Lccep400ApplicationJSONErrorEnum = "invalid_txnid"
Lccep400ApplicationJSONErrorEnumInvalidConsentid Lccep400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Lccep400ApplicationJSONErrorDescriptionEnum string

const (
    Lccep400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Lccep400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Lccep400ApplicationJSONErrorDescriptionEnumBadRequest Lccep400ApplicationJSONErrorDescriptionEnum = "Bad request"
Lccep400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Lccep400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Lccep400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Lccep400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Lccep400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lccep400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Lccep400ApplicationJSON struct {
    Error *Lccep400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep401ApplicationJSONErrorEnum string

const (
    Lccep401ApplicationJSONErrorEnumInvalidAuthentication Lccep401ApplicationJSONErrorEnum = "invalid_authentication"
Lccep401ApplicationJSONErrorEnumInvalidAuthorization Lccep401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Lccep401ApplicationJSONErrorDescriptionEnum string

const (
    Lccep401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Lccep401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Lccep401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lccep401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Lccep401ApplicationJSON struct {
    Error *Lccep401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep404ApplicationJSONErrorEnum string

const (
    Lccep404ApplicationJSONErrorEnumRecordNotFound Lccep404ApplicationJSONErrorEnum = "record_not_found"
Lccep404ApplicationJSONErrorEnumURLNotFound Lccep404ApplicationJSONErrorEnum = "url_not_found"
)



type Lccep404ApplicationJSONErrorDescriptionEnum string

const (
    Lccep404ApplicationJSONErrorDescriptionEnumNoRecordFound Lccep404ApplicationJSONErrorDescriptionEnum = "No record found"
Lccep404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lccep404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Lccep404ApplicationJSON struct {
    Error *Lccep404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep500ApplicationJSONErrorEnum string

const (
    Lccep500ApplicationJSONErrorEnumInternalServerError Lccep500ApplicationJSONErrorEnum = "internal_server_error"
)



type Lccep500ApplicationJSONErrorDescriptionEnum string

const (
    Lccep500ApplicationJSONErrorDescriptionEnumInternalServerError Lccep500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Lccep500ApplicationJSON struct {
    Error *Lccep500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep502ApplicationJSONErrorEnum string

const (
    Lccep502ApplicationJSONErrorEnumBadGatewy Lccep502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Lccep502ApplicationJSONErrorDescriptionEnum string

const (
    Lccep502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lccep502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Lccep502ApplicationJSON struct {
    Error *Lccep502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep503ApplicationJSONErrorEnum string

const (
    Lccep503ApplicationJSONErrorEnumServiceUnavailable Lccep503ApplicationJSONErrorEnum = "service_unavailable"
)



type Lccep503ApplicationJSONErrorDescriptionEnum string

const (
    Lccep503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lccep503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Lccep503ApplicationJSON struct {
    Error *Lccep503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lccep504ApplicationJSONErrorEnum string

const (
    Lccep504ApplicationJSONErrorEnumGatewayTimeout Lccep504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Lccep504ApplicationJSONErrorDescriptionEnum string

const (
    Lccep504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lccep504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Lccep504ApplicationJSON struct {
    Error *Lccep504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lccep504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type LccepResponse struct {
    ContentType string 
    StatusCode int64 
    Lccep400ApplicationJSONObject *Lccep400ApplicationJSON 
    Lccep401ApplicationJSONObject *Lccep401ApplicationJSON 
    Lccep404ApplicationJSONObject *Lccep404ApplicationJSON 
    Lccep500ApplicationJSONObject *Lccep500ApplicationJSON 
    Lccep502ApplicationJSONObject *Lccep502ApplicationJSON 
    Lccep503ApplicationJSONObject *Lccep503ApplicationJSON 
    Lccep504ApplicationJSONObject *Lccep504ApplicationJSON 
    
}

