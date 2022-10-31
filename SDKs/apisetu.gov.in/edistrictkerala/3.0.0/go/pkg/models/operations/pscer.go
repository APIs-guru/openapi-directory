package operations

import (
"openapi/pkg/models/shared")

type PscerRequestBodyCertificateParameters struct {
    Aplno string `json:"aplno"`
    Certno string `json:"certno"`
    Sccd string `json:"sccd"`
    
}


type PscerRequestBodyFormatEnum string

const (
    PscerRequestBodyFormatEnumPdf PscerRequestBodyFormatEnum = "pdf"
)


type PscerRequestBody struct {
    CertificateParameters *PscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format PscerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type PscerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PscerRequest struct {
    Request *PscerRequestBody `request:"mediaType=application/json"`
    Security PscerSecurity 
    
}


type Pscer400ApplicationJSONErrorEnum string

const (
    Pscer400ApplicationJSONErrorEnumMissingParameter Pscer400ApplicationJSONErrorEnum = "missing_parameter"
Pscer400ApplicationJSONErrorEnumInvalidParameter Pscer400ApplicationJSONErrorEnum = "invalid_parameter"
Pscer400ApplicationJSONErrorEnumInvalidFormat Pscer400ApplicationJSONErrorEnum = "invalid_format"
Pscer400ApplicationJSONErrorEnumInvalidTxnid Pscer400ApplicationJSONErrorEnum = "invalid_txnid"
Pscer400ApplicationJSONErrorEnumInvalidConsentid Pscer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Pscer400ApplicationJSONErrorDescriptionEnum string

const (
    Pscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Pscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Pscer400ApplicationJSONErrorDescriptionEnumBadRequest Pscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Pscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Pscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Pscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Pscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Pscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Pscer400ApplicationJSON struct {
    Error *Pscer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer401ApplicationJSONErrorEnum string

const (
    Pscer401ApplicationJSONErrorEnumInvalidAuthentication Pscer401ApplicationJSONErrorEnum = "invalid_authentication"
Pscer401ApplicationJSONErrorEnumInvalidAuthorization Pscer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Pscer401ApplicationJSONErrorDescriptionEnum string

const (
    Pscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Pscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Pscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Pscer401ApplicationJSON struct {
    Error *Pscer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer404ApplicationJSONErrorEnum string

const (
    Pscer404ApplicationJSONErrorEnumRecordNotFound Pscer404ApplicationJSONErrorEnum = "record_not_found"
Pscer404ApplicationJSONErrorEnumURLNotFound Pscer404ApplicationJSONErrorEnum = "url_not_found"
)



type Pscer404ApplicationJSONErrorDescriptionEnum string

const (
    Pscer404ApplicationJSONErrorDescriptionEnumNoRecordFound Pscer404ApplicationJSONErrorDescriptionEnum = "No record found"
Pscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Pscer404ApplicationJSON struct {
    Error *Pscer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer500ApplicationJSONErrorEnum string

const (
    Pscer500ApplicationJSONErrorEnumInternalServerError Pscer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Pscer500ApplicationJSONErrorDescriptionEnum string

const (
    Pscer500ApplicationJSONErrorDescriptionEnumInternalServerError Pscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Pscer500ApplicationJSON struct {
    Error *Pscer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer502ApplicationJSONErrorEnum string

const (
    Pscer502ApplicationJSONErrorEnumBadGatewy Pscer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Pscer502ApplicationJSONErrorDescriptionEnum string

const (
    Pscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Pscer502ApplicationJSON struct {
    Error *Pscer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer503ApplicationJSONErrorEnum string

const (
    Pscer503ApplicationJSONErrorEnumServiceUnavailable Pscer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Pscer503ApplicationJSONErrorDescriptionEnum string

const (
    Pscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Pscer503ApplicationJSON struct {
    Error *Pscer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pscer504ApplicationJSONErrorEnum string

const (
    Pscer504ApplicationJSONErrorEnumGatewayTimeout Pscer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Pscer504ApplicationJSONErrorDescriptionEnum string

const (
    Pscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Pscer504ApplicationJSON struct {
    Error *Pscer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type PscerResponse struct {
    ContentType string 
    StatusCode int64 
    Pscer400ApplicationJSONObject *Pscer400ApplicationJSON 
    Pscer401ApplicationJSONObject *Pscer401ApplicationJSON 
    Pscer404ApplicationJSONObject *Pscer404ApplicationJSON 
    Pscer500ApplicationJSONObject *Pscer500ApplicationJSON 
    Pscer502ApplicationJSONObject *Pscer502ApplicationJSON 
    Pscer503ApplicationJSONObject *Pscer503ApplicationJSON 
    Pscer504ApplicationJSONObject *Pscer504ApplicationJSON 
    
}

