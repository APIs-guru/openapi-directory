package operations

import (
"openapi/pkg/models/shared")

type PsprtRequestBodyCertificateParameters struct {
    Name string `json:"Name"`
    RefNo string `json:"RefNo"`
    
}


type PsprtRequestBodyFormatEnum string

const (
    PsprtRequestBodyFormatEnumPdf PsprtRequestBodyFormatEnum = "pdf"
)


type PsprtRequestBody struct {
    CertificateParameters *PsprtRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format PsprtRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type PsprtSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PsprtRequest struct {
    Request *PsprtRequestBody `request:"mediaType=application/json"`
    Security PsprtSecurity 
    
}


type Psprt400ApplicationJSONErrorEnum string

const (
    Psprt400ApplicationJSONErrorEnumMissingParameter Psprt400ApplicationJSONErrorEnum = "missing_parameter"
Psprt400ApplicationJSONErrorEnumInvalidParameter Psprt400ApplicationJSONErrorEnum = "invalid_parameter"
Psprt400ApplicationJSONErrorEnumInvalidFormat Psprt400ApplicationJSONErrorEnum = "invalid_format"
Psprt400ApplicationJSONErrorEnumInvalidTxnid Psprt400ApplicationJSONErrorEnum = "invalid_txnid"
Psprt400ApplicationJSONErrorEnumInvalidConsentid Psprt400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Psprt400ApplicationJSONErrorDescriptionEnum string

const (
    Psprt400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Psprt400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Psprt400ApplicationJSONErrorDescriptionEnumBadRequest Psprt400ApplicationJSONErrorDescriptionEnum = "Bad request"
Psprt400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Psprt400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Psprt400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Psprt400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Psprt400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Psprt400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Psprt400ApplicationJSON struct {
    Error *Psprt400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt401ApplicationJSONErrorEnum string

const (
    Psprt401ApplicationJSONErrorEnumInvalidAuthentication Psprt401ApplicationJSONErrorEnum = "invalid_authentication"
Psprt401ApplicationJSONErrorEnumInvalidAuthorization Psprt401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Psprt401ApplicationJSONErrorDescriptionEnum string

const (
    Psprt401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Psprt401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Psprt401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Psprt401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Psprt401ApplicationJSON struct {
    Error *Psprt401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt404ApplicationJSONErrorEnum string

const (
    Psprt404ApplicationJSONErrorEnumRecordNotFound Psprt404ApplicationJSONErrorEnum = "record_not_found"
Psprt404ApplicationJSONErrorEnumURLNotFound Psprt404ApplicationJSONErrorEnum = "url_not_found"
)



type Psprt404ApplicationJSONErrorDescriptionEnum string

const (
    Psprt404ApplicationJSONErrorDescriptionEnumNoRecordFound Psprt404ApplicationJSONErrorDescriptionEnum = "No record found"
Psprt404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Psprt404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Psprt404ApplicationJSON struct {
    Error *Psprt404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt500ApplicationJSONErrorEnum string

const (
    Psprt500ApplicationJSONErrorEnumInternalServerError Psprt500ApplicationJSONErrorEnum = "internal_server_error"
)



type Psprt500ApplicationJSONErrorDescriptionEnum string

const (
    Psprt500ApplicationJSONErrorDescriptionEnumInternalServerError Psprt500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Psprt500ApplicationJSON struct {
    Error *Psprt500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt502ApplicationJSONErrorEnum string

const (
    Psprt502ApplicationJSONErrorEnumBadGatewy Psprt502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Psprt502ApplicationJSONErrorDescriptionEnum string

const (
    Psprt502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Psprt502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Psprt502ApplicationJSON struct {
    Error *Psprt502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt503ApplicationJSONErrorEnum string

const (
    Psprt503ApplicationJSONErrorEnumServiceUnavailable Psprt503ApplicationJSONErrorEnum = "service_unavailable"
)



type Psprt503ApplicationJSONErrorDescriptionEnum string

const (
    Psprt503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Psprt503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Psprt503ApplicationJSON struct {
    Error *Psprt503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Psprt504ApplicationJSONErrorEnum string

const (
    Psprt504ApplicationJSONErrorEnumGatewayTimeout Psprt504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Psprt504ApplicationJSONErrorDescriptionEnum string

const (
    Psprt504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Psprt504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Psprt504ApplicationJSON struct {
    Error *Psprt504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Psprt504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type PsprtResponse struct {
    ContentType string 
    StatusCode int64 
    Psprt400ApplicationJSONObject *Psprt400ApplicationJSON 
    Psprt401ApplicationJSONObject *Psprt401ApplicationJSON 
    Psprt404ApplicationJSONObject *Psprt404ApplicationJSON 
    Psprt500ApplicationJSONObject *Psprt500ApplicationJSON 
    Psprt502ApplicationJSONObject *Psprt502ApplicationJSON 
    Psprt503ApplicationJSONObject *Psprt503ApplicationJSON 
    Psprt504ApplicationJSONObject *Psprt504ApplicationJSON 
    
}

