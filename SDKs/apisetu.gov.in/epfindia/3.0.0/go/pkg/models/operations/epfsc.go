package operations

import (
"openapi/pkg/models/shared")

type EpfscRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    Scno string `json:"SCNO"`
    
}


type EpfscRequestBodyFormatEnum string

const (
    EpfscRequestBodyFormatEnumPdf EpfscRequestBodyFormatEnum = "pdf"
)


type EpfscRequestBody struct {
    CertificateParameters *EpfscRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format EpfscRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type EpfscSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type EpfscRequest struct {
    Request *EpfscRequestBody `request:"mediaType=application/json"`
    Security EpfscSecurity 
    
}


type Epfsc400ApplicationJSONErrorEnum string

const (
    Epfsc400ApplicationJSONErrorEnumMissingParameter Epfsc400ApplicationJSONErrorEnum = "missing_parameter"
Epfsc400ApplicationJSONErrorEnumInvalidParameter Epfsc400ApplicationJSONErrorEnum = "invalid_parameter"
Epfsc400ApplicationJSONErrorEnumInvalidFormat Epfsc400ApplicationJSONErrorEnum = "invalid_format"
Epfsc400ApplicationJSONErrorEnumInvalidTxnid Epfsc400ApplicationJSONErrorEnum = "invalid_txnid"
Epfsc400ApplicationJSONErrorEnumInvalidConsentid Epfsc400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Epfsc400ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Epfsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Epfsc400ApplicationJSONErrorDescriptionEnumBadRequest Epfsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
Epfsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Epfsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Epfsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Epfsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Epfsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Epfsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Epfsc400ApplicationJSON struct {
    Error *Epfsc400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc401ApplicationJSONErrorEnum string

const (
    Epfsc401ApplicationJSONErrorEnumInvalidAuthentication Epfsc401ApplicationJSONErrorEnum = "invalid_authentication"
Epfsc401ApplicationJSONErrorEnumInvalidAuthorization Epfsc401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Epfsc401ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Epfsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Epfsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Epfsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Epfsc401ApplicationJSON struct {
    Error *Epfsc401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc404ApplicationJSONErrorEnum string

const (
    Epfsc404ApplicationJSONErrorEnumRecordNotFound Epfsc404ApplicationJSONErrorEnum = "record_not_found"
Epfsc404ApplicationJSONErrorEnumURLNotFound Epfsc404ApplicationJSONErrorEnum = "url_not_found"
)



type Epfsc404ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc404ApplicationJSONErrorDescriptionEnumNoRecordFound Epfsc404ApplicationJSONErrorDescriptionEnum = "No record found"
Epfsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Epfsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Epfsc404ApplicationJSON struct {
    Error *Epfsc404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc500ApplicationJSONErrorEnum string

const (
    Epfsc500ApplicationJSONErrorEnumInternalServerError Epfsc500ApplicationJSONErrorEnum = "internal_server_error"
)



type Epfsc500ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc500ApplicationJSONErrorDescriptionEnumInternalServerError Epfsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Epfsc500ApplicationJSON struct {
    Error *Epfsc500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc502ApplicationJSONErrorEnum string

const (
    Epfsc502ApplicationJSONErrorEnumBadGatewy Epfsc502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Epfsc502ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Epfsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Epfsc502ApplicationJSON struct {
    Error *Epfsc502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc503ApplicationJSONErrorEnum string

const (
    Epfsc503ApplicationJSONErrorEnumServiceUnavailable Epfsc503ApplicationJSONErrorEnum = "service_unavailable"
)



type Epfsc503ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Epfsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Epfsc503ApplicationJSON struct {
    Error *Epfsc503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Epfsc504ApplicationJSONErrorEnum string

const (
    Epfsc504ApplicationJSONErrorEnumGatewayTimeout Epfsc504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Epfsc504ApplicationJSONErrorDescriptionEnum string

const (
    Epfsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Epfsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Epfsc504ApplicationJSON struct {
    Error *Epfsc504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Epfsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type EpfscResponse struct {
    ContentType string 
    StatusCode int64 
    Epfsc400ApplicationJSONObject *Epfsc400ApplicationJSON 
    Epfsc401ApplicationJSONObject *Epfsc401ApplicationJSON 
    Epfsc404ApplicationJSONObject *Epfsc404ApplicationJSON 
    Epfsc500ApplicationJSONObject *Epfsc500ApplicationJSON 
    Epfsc502ApplicationJSONObject *Epfsc502ApplicationJSON 
    Epfsc503ApplicationJSONObject *Epfsc503ApplicationJSON 
    Epfsc504ApplicationJSONObject *Epfsc504ApplicationJSON 
    
}

