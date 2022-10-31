package operations

import (
"openapi/pkg/models/shared")

type CvipcRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    PolicyNumber string `json:"policy_number"`
    
}


type CvipcRequestBodyFormatEnum string

const (
    CvipcRequestBodyFormatEnumPdf CvipcRequestBodyFormatEnum = "pdf"
)


type CvipcRequestBody struct {
    CertificateParameters *CvipcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format CvipcRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type CvipcSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type CvipcRequest struct {
    Request *CvipcRequestBody `request:"mediaType=application/json"`
    Security CvipcSecurity 
    
}


type Cvipc400ApplicationJSONErrorEnum string

const (
    Cvipc400ApplicationJSONErrorEnumMissingParameter Cvipc400ApplicationJSONErrorEnum = "missing_parameter"
Cvipc400ApplicationJSONErrorEnumInvalidParameter Cvipc400ApplicationJSONErrorEnum = "invalid_parameter"
Cvipc400ApplicationJSONErrorEnumInvalidFormat Cvipc400ApplicationJSONErrorEnum = "invalid_format"
Cvipc400ApplicationJSONErrorEnumInvalidTxnid Cvipc400ApplicationJSONErrorEnum = "invalid_txnid"
Cvipc400ApplicationJSONErrorEnumInvalidConsentid Cvipc400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Cvipc400ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Cvipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Cvipc400ApplicationJSONErrorDescriptionEnumBadRequest Cvipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
Cvipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Cvipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Cvipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Cvipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Cvipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cvipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Cvipc400ApplicationJSON struct {
    Error *Cvipc400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc401ApplicationJSONErrorEnum string

const (
    Cvipc401ApplicationJSONErrorEnumInvalidAuthentication Cvipc401ApplicationJSONErrorEnum = "invalid_authentication"
Cvipc401ApplicationJSONErrorEnumInvalidAuthorization Cvipc401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Cvipc401ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Cvipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Cvipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cvipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Cvipc401ApplicationJSON struct {
    Error *Cvipc401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc404ApplicationJSONErrorEnum string

const (
    Cvipc404ApplicationJSONErrorEnumRecordNotFound Cvipc404ApplicationJSONErrorEnum = "record_not_found"
Cvipc404ApplicationJSONErrorEnumURLNotFound Cvipc404ApplicationJSONErrorEnum = "url_not_found"
)



type Cvipc404ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc404ApplicationJSONErrorDescriptionEnumNoRecordFound Cvipc404ApplicationJSONErrorDescriptionEnum = "No record found"
Cvipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cvipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Cvipc404ApplicationJSON struct {
    Error *Cvipc404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc500ApplicationJSONErrorEnum string

const (
    Cvipc500ApplicationJSONErrorEnumInternalServerError Cvipc500ApplicationJSONErrorEnum = "internal_server_error"
)



type Cvipc500ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc500ApplicationJSONErrorDescriptionEnumInternalServerError Cvipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Cvipc500ApplicationJSON struct {
    Error *Cvipc500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc502ApplicationJSONErrorEnum string

const (
    Cvipc502ApplicationJSONErrorEnumBadGatewy Cvipc502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Cvipc502ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cvipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Cvipc502ApplicationJSON struct {
    Error *Cvipc502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc503ApplicationJSONErrorEnum string

const (
    Cvipc503ApplicationJSONErrorEnumServiceUnavailable Cvipc503ApplicationJSONErrorEnum = "service_unavailable"
)



type Cvipc503ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cvipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Cvipc503ApplicationJSON struct {
    Error *Cvipc503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cvipc504ApplicationJSONErrorEnum string

const (
    Cvipc504ApplicationJSONErrorEnumGatewayTimeout Cvipc504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Cvipc504ApplicationJSONErrorDescriptionEnum string

const (
    Cvipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cvipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Cvipc504ApplicationJSON struct {
    Error *Cvipc504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cvipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type CvipcResponse struct {
    ContentType string 
    StatusCode int64 
    Cvipc400ApplicationJSONObject *Cvipc400ApplicationJSON 
    Cvipc401ApplicationJSONObject *Cvipc401ApplicationJSON 
    Cvipc404ApplicationJSONObject *Cvipc404ApplicationJSON 
    Cvipc500ApplicationJSONObject *Cvipc500ApplicationJSON 
    Cvipc502ApplicationJSONObject *Cvipc502ApplicationJSON 
    Cvipc503ApplicationJSONObject *Cvipc503ApplicationJSON 
    Cvipc504ApplicationJSONObject *Cvipc504ApplicationJSON 
    
}

