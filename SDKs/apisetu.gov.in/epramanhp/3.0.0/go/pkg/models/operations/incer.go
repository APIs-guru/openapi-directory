package operations

import (
"openapi/pkg/models/shared")

type IncerRequestBodyCertificateParameters struct {
    Name string `json:"Name"`
    RefNo string `json:"RefNo"`
    
}


type IncerRequestBodyFormatEnum string

const (
    IncerRequestBodyFormatEnumPdf IncerRequestBodyFormatEnum = "pdf"
)


type IncerRequestBody struct {
    CertificateParameters *IncerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format IncerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type IncerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type IncerRequest struct {
    Request *IncerRequestBody `request:"mediaType=application/json"`
    Security IncerSecurity 
    
}


type Incer400ApplicationJSONErrorEnum string

const (
    Incer400ApplicationJSONErrorEnumMissingParameter Incer400ApplicationJSONErrorEnum = "missing_parameter"
Incer400ApplicationJSONErrorEnumInvalidParameter Incer400ApplicationJSONErrorEnum = "invalid_parameter"
Incer400ApplicationJSONErrorEnumInvalidFormat Incer400ApplicationJSONErrorEnum = "invalid_format"
Incer400ApplicationJSONErrorEnumInvalidTxnid Incer400ApplicationJSONErrorEnum = "invalid_txnid"
Incer400ApplicationJSONErrorEnumInvalidConsentid Incer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Incer400ApplicationJSONErrorDescriptionEnum string

const (
    Incer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Incer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Incer400ApplicationJSONErrorDescriptionEnumBadRequest Incer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Incer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Incer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Incer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Incer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Incer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Incer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Incer400ApplicationJSON struct {
    Error *Incer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer401ApplicationJSONErrorEnum string

const (
    Incer401ApplicationJSONErrorEnumInvalidAuthentication Incer401ApplicationJSONErrorEnum = "invalid_authentication"
Incer401ApplicationJSONErrorEnumInvalidAuthorization Incer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Incer401ApplicationJSONErrorDescriptionEnum string

const (
    Incer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Incer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Incer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Incer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Incer401ApplicationJSON struct {
    Error *Incer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer404ApplicationJSONErrorEnum string

const (
    Incer404ApplicationJSONErrorEnumRecordNotFound Incer404ApplicationJSONErrorEnum = "record_not_found"
Incer404ApplicationJSONErrorEnumURLNotFound Incer404ApplicationJSONErrorEnum = "url_not_found"
)



type Incer404ApplicationJSONErrorDescriptionEnum string

const (
    Incer404ApplicationJSONErrorDescriptionEnumNoRecordFound Incer404ApplicationJSONErrorDescriptionEnum = "No record found"
Incer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Incer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Incer404ApplicationJSON struct {
    Error *Incer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer500ApplicationJSONErrorEnum string

const (
    Incer500ApplicationJSONErrorEnumInternalServerError Incer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Incer500ApplicationJSONErrorDescriptionEnum string

const (
    Incer500ApplicationJSONErrorDescriptionEnumInternalServerError Incer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Incer500ApplicationJSON struct {
    Error *Incer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer502ApplicationJSONErrorEnum string

const (
    Incer502ApplicationJSONErrorEnumBadGatewy Incer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Incer502ApplicationJSONErrorDescriptionEnum string

const (
    Incer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Incer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Incer502ApplicationJSON struct {
    Error *Incer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer503ApplicationJSONErrorEnum string

const (
    Incer503ApplicationJSONErrorEnumServiceUnavailable Incer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Incer503ApplicationJSONErrorDescriptionEnum string

const (
    Incer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Incer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Incer503ApplicationJSON struct {
    Error *Incer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Incer504ApplicationJSONErrorEnum string

const (
    Incer504ApplicationJSONErrorEnumGatewayTimeout Incer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Incer504ApplicationJSONErrorDescriptionEnum string

const (
    Incer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Incer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Incer504ApplicationJSON struct {
    Error *Incer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Incer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type IncerResponse struct {
    ContentType string 
    StatusCode int64 
    Incer400ApplicationJSONObject *Incer400ApplicationJSON 
    Incer401ApplicationJSONObject *Incer401ApplicationJSON 
    Incer404ApplicationJSONObject *Incer404ApplicationJSON 
    Incer500ApplicationJSONObject *Incer500ApplicationJSON 
    Incer502ApplicationJSONObject *Incer502ApplicationJSON 
    Incer503ApplicationJSONObject *Incer503ApplicationJSON 
    Incer504ApplicationJSONObject *Incer504ApplicationJSON 
    
}

