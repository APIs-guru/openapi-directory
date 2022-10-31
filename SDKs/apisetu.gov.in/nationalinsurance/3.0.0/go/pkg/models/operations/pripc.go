package operations

import (
"openapi/pkg/models/shared")

type PripcRequestBodyCertificateParameters struct {
    CustomerID string `json:"customer_Id"`
    PolicyNumber string `json:"policy_Number"`
    PolicyStartDate string `json:"policy_StartDate"`
    
}


type PripcRequestBodyFormatEnum string

const (
    PripcRequestBodyFormatEnumPdf PripcRequestBodyFormatEnum = "pdf"
)


type PripcRequestBody struct {
    CertificateParameters *PripcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format PripcRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type PripcSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PripcRequest struct {
    Request *PripcRequestBody `request:"mediaType=application/json"`
    Security PripcSecurity 
    
}


type Pripc400ApplicationJSONErrorEnum string

const (
    Pripc400ApplicationJSONErrorEnumMissingParameter Pripc400ApplicationJSONErrorEnum = "missing_parameter"
Pripc400ApplicationJSONErrorEnumInvalidParameter Pripc400ApplicationJSONErrorEnum = "invalid_parameter"
Pripc400ApplicationJSONErrorEnumInvalidFormat Pripc400ApplicationJSONErrorEnum = "invalid_format"
Pripc400ApplicationJSONErrorEnumInvalidTxnid Pripc400ApplicationJSONErrorEnum = "invalid_txnid"
Pripc400ApplicationJSONErrorEnumInvalidConsentid Pripc400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Pripc400ApplicationJSONErrorDescriptionEnum string

const (
    Pripc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Pripc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Pripc400ApplicationJSONErrorDescriptionEnumBadRequest Pripc400ApplicationJSONErrorDescriptionEnum = "Bad request"
Pripc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Pripc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Pripc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Pripc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Pripc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pripc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Pripc400ApplicationJSON struct {
    Error *Pripc400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc401ApplicationJSONErrorEnum string

const (
    Pripc401ApplicationJSONErrorEnumInvalidAuthentication Pripc401ApplicationJSONErrorEnum = "invalid_authentication"
Pripc401ApplicationJSONErrorEnumInvalidAuthorization Pripc401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Pripc401ApplicationJSONErrorDescriptionEnum string

const (
    Pripc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Pripc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Pripc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pripc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Pripc401ApplicationJSON struct {
    Error *Pripc401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc404ApplicationJSONErrorEnum string

const (
    Pripc404ApplicationJSONErrorEnumRecordNotFound Pripc404ApplicationJSONErrorEnum = "record_not_found"
Pripc404ApplicationJSONErrorEnumURLNotFound Pripc404ApplicationJSONErrorEnum = "url_not_found"
)



type Pripc404ApplicationJSONErrorDescriptionEnum string

const (
    Pripc404ApplicationJSONErrorDescriptionEnumNoRecordFound Pripc404ApplicationJSONErrorDescriptionEnum = "No record found"
Pripc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pripc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Pripc404ApplicationJSON struct {
    Error *Pripc404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc500ApplicationJSONErrorEnum string

const (
    Pripc500ApplicationJSONErrorEnumInternalServerError Pripc500ApplicationJSONErrorEnum = "internal_server_error"
)



type Pripc500ApplicationJSONErrorDescriptionEnum string

const (
    Pripc500ApplicationJSONErrorDescriptionEnumInternalServerError Pripc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Pripc500ApplicationJSON struct {
    Error *Pripc500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc502ApplicationJSONErrorEnum string

const (
    Pripc502ApplicationJSONErrorEnumBadGatewy Pripc502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Pripc502ApplicationJSONErrorDescriptionEnum string

const (
    Pripc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pripc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Pripc502ApplicationJSON struct {
    Error *Pripc502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc503ApplicationJSONErrorEnum string

const (
    Pripc503ApplicationJSONErrorEnumServiceUnavailable Pripc503ApplicationJSONErrorEnum = "service_unavailable"
)



type Pripc503ApplicationJSONErrorDescriptionEnum string

const (
    Pripc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pripc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Pripc503ApplicationJSON struct {
    Error *Pripc503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pripc504ApplicationJSONErrorEnum string

const (
    Pripc504ApplicationJSONErrorEnumGatewayTimeout Pripc504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Pripc504ApplicationJSONErrorDescriptionEnum string

const (
    Pripc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pripc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Pripc504ApplicationJSON struct {
    Error *Pripc504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pripc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type PripcResponse struct {
    ContentType string 
    StatusCode int64 
    Pripc400ApplicationJSONObject *Pripc400ApplicationJSON 
    Pripc401ApplicationJSONObject *Pripc401ApplicationJSON 
    Pripc404ApplicationJSONObject *Pripc404ApplicationJSON 
    Pripc500ApplicationJSONObject *Pripc500ApplicationJSON 
    Pripc502ApplicationJSONObject *Pripc502ApplicationJSON 
    Pripc503ApplicationJSONObject *Pripc503ApplicationJSON 
    Pripc504ApplicationJSONObject *Pripc504ApplicationJSON 
    
}

