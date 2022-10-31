package operations

import (
"openapi/pkg/models/shared")

type TapcnRequestBodyCertificateParameters struct {
    DocumentNumber string `json:"DocumentNumber"`
    
}


type TapcnRequestBodyFormatEnum string

const (
    TapcnRequestBodyFormatEnumPdf TapcnRequestBodyFormatEnum = "pdf"
)


type TapcnRequestBody struct {
    CertificateParameters *TapcnRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format TapcnRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type TapcnSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type TapcnRequest struct {
    Request *TapcnRequestBody `request:"mediaType=application/json"`
    Security TapcnSecurity 
    
}


type Tapcn400ApplicationJSONErrorEnum string

const (
    Tapcn400ApplicationJSONErrorEnumMissingParameter Tapcn400ApplicationJSONErrorEnum = "missing_parameter"
Tapcn400ApplicationJSONErrorEnumInvalidParameter Tapcn400ApplicationJSONErrorEnum = "invalid_parameter"
Tapcn400ApplicationJSONErrorEnumInvalidFormat Tapcn400ApplicationJSONErrorEnum = "invalid_format"
Tapcn400ApplicationJSONErrorEnumInvalidTxnid Tapcn400ApplicationJSONErrorEnum = "invalid_txnid"
Tapcn400ApplicationJSONErrorEnumInvalidConsentid Tapcn400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Tapcn400ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Tapcn400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Tapcn400ApplicationJSONErrorDescriptionEnumBadRequest Tapcn400ApplicationJSONErrorDescriptionEnum = "Bad request"
Tapcn400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Tapcn400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Tapcn400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Tapcn400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Tapcn400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tapcn400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Tapcn400ApplicationJSON struct {
    Error *Tapcn400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn401ApplicationJSONErrorEnum string

const (
    Tapcn401ApplicationJSONErrorEnumInvalidAuthentication Tapcn401ApplicationJSONErrorEnum = "invalid_authentication"
Tapcn401ApplicationJSONErrorEnumInvalidAuthorization Tapcn401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Tapcn401ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Tapcn401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Tapcn401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tapcn401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Tapcn401ApplicationJSON struct {
    Error *Tapcn401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn404ApplicationJSONErrorEnum string

const (
    Tapcn404ApplicationJSONErrorEnumRecordNotFound Tapcn404ApplicationJSONErrorEnum = "record_not_found"
Tapcn404ApplicationJSONErrorEnumURLNotFound Tapcn404ApplicationJSONErrorEnum = "url_not_found"
)



type Tapcn404ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn404ApplicationJSONErrorDescriptionEnumNoRecordFound Tapcn404ApplicationJSONErrorDescriptionEnum = "No record found"
Tapcn404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tapcn404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Tapcn404ApplicationJSON struct {
    Error *Tapcn404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn500ApplicationJSONErrorEnum string

const (
    Tapcn500ApplicationJSONErrorEnumInternalServerError Tapcn500ApplicationJSONErrorEnum = "internal_server_error"
)



type Tapcn500ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn500ApplicationJSONErrorDescriptionEnumInternalServerError Tapcn500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Tapcn500ApplicationJSON struct {
    Error *Tapcn500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn502ApplicationJSONErrorEnum string

const (
    Tapcn502ApplicationJSONErrorEnumBadGatewy Tapcn502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Tapcn502ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tapcn502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Tapcn502ApplicationJSON struct {
    Error *Tapcn502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn503ApplicationJSONErrorEnum string

const (
    Tapcn503ApplicationJSONErrorEnumServiceUnavailable Tapcn503ApplicationJSONErrorEnum = "service_unavailable"
)



type Tapcn503ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tapcn503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Tapcn503ApplicationJSON struct {
    Error *Tapcn503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Tapcn504ApplicationJSONErrorEnum string

const (
    Tapcn504ApplicationJSONErrorEnumGatewayTimeout Tapcn504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Tapcn504ApplicationJSONErrorDescriptionEnum string

const (
    Tapcn504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tapcn504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Tapcn504ApplicationJSON struct {
    Error *Tapcn504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Tapcn504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type TapcnResponse struct {
    ContentType string 
    StatusCode int64 
    Tapcn400ApplicationJSONObject *Tapcn400ApplicationJSON 
    Tapcn401ApplicationJSONObject *Tapcn401ApplicationJSON 
    Tapcn404ApplicationJSONObject *Tapcn404ApplicationJSON 
    Tapcn500ApplicationJSONObject *Tapcn500ApplicationJSON 
    Tapcn502ApplicationJSONObject *Tapcn502ApplicationJSON 
    Tapcn503ApplicationJSONObject *Tapcn503ApplicationJSON 
    Tapcn504ApplicationJSONObject *Tapcn504ApplicationJSON 
    
}

