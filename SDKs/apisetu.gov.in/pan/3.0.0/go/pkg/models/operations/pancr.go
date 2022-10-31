package operations

import (
"openapi/pkg/models/shared")

type PancrRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    Gender string `json:"GENDER"`
    PanFullName string `json:"PANFullName"`
    UID string `json:"UID"`
    Panno string `json:"panno"`
    
}


type PancrRequestBodyFormatEnum string

const (
    PancrRequestBodyFormatEnumXML PancrRequestBodyFormatEnum = "xml"
PancrRequestBodyFormatEnumPdf PancrRequestBodyFormatEnum = "pdf"
)


type PancrRequestBody struct {
    CertificateParameters *PancrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format PancrRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type PancrSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PancrRequest struct {
    Request *PancrRequestBody `request:"mediaType=application/json"`
    Security PancrSecurity 
    
}


type Pancr400ApplicationJSONErrorEnum string

const (
    Pancr400ApplicationJSONErrorEnumMissingParameter Pancr400ApplicationJSONErrorEnum = "missing_parameter"
Pancr400ApplicationJSONErrorEnumInvalidParameter Pancr400ApplicationJSONErrorEnum = "invalid_parameter"
Pancr400ApplicationJSONErrorEnumInvalidFormat Pancr400ApplicationJSONErrorEnum = "invalid_format"
Pancr400ApplicationJSONErrorEnumInvalidTxnid Pancr400ApplicationJSONErrorEnum = "invalid_txnid"
Pancr400ApplicationJSONErrorEnumInvalidConsentid Pancr400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Pancr400ApplicationJSONErrorDescriptionEnum string

const (
    Pancr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Pancr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Pancr400ApplicationJSONErrorDescriptionEnumBadRequest Pancr400ApplicationJSONErrorDescriptionEnum = "Bad request"
Pancr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Pancr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Pancr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Pancr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Pancr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pancr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Pancr400ApplicationJSON struct {
    Error *Pancr400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr401ApplicationJSONErrorEnum string

const (
    Pancr401ApplicationJSONErrorEnumInvalidAuthentication Pancr401ApplicationJSONErrorEnum = "invalid_authentication"
Pancr401ApplicationJSONErrorEnumInvalidAuthorization Pancr401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Pancr401ApplicationJSONErrorDescriptionEnum string

const (
    Pancr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Pancr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Pancr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pancr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Pancr401ApplicationJSON struct {
    Error *Pancr401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr404ApplicationJSONErrorEnum string

const (
    Pancr404ApplicationJSONErrorEnumRecordNotFound Pancr404ApplicationJSONErrorEnum = "record_not_found"
Pancr404ApplicationJSONErrorEnumURLNotFound Pancr404ApplicationJSONErrorEnum = "url_not_found"
)



type Pancr404ApplicationJSONErrorDescriptionEnum string

const (
    Pancr404ApplicationJSONErrorDescriptionEnumNoRecordFound Pancr404ApplicationJSONErrorDescriptionEnum = "No record found"
Pancr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pancr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Pancr404ApplicationJSON struct {
    Error *Pancr404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr500ApplicationJSONErrorEnum string

const (
    Pancr500ApplicationJSONErrorEnumInternalServerError Pancr500ApplicationJSONErrorEnum = "internal_server_error"
)



type Pancr500ApplicationJSONErrorDescriptionEnum string

const (
    Pancr500ApplicationJSONErrorDescriptionEnumInternalServerError Pancr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Pancr500ApplicationJSON struct {
    Error *Pancr500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr502ApplicationJSONErrorEnum string

const (
    Pancr502ApplicationJSONErrorEnumBadGatewy Pancr502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Pancr502ApplicationJSONErrorDescriptionEnum string

const (
    Pancr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pancr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Pancr502ApplicationJSON struct {
    Error *Pancr502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr503ApplicationJSONErrorEnum string

const (
    Pancr503ApplicationJSONErrorEnumServiceUnavailable Pancr503ApplicationJSONErrorEnum = "service_unavailable"
)



type Pancr503ApplicationJSONErrorDescriptionEnum string

const (
    Pancr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pancr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Pancr503ApplicationJSON struct {
    Error *Pancr503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pancr504ApplicationJSONErrorEnum string

const (
    Pancr504ApplicationJSONErrorEnumGatewayTimeout Pancr504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Pancr504ApplicationJSONErrorDescriptionEnum string

const (
    Pancr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pancr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Pancr504ApplicationJSON struct {
    Error *Pancr504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pancr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type PancrResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Pancr400ApplicationJSONObject *Pancr400ApplicationJSON 
    Pancr401ApplicationJSONObject *Pancr401ApplicationJSON 
    Pancr404ApplicationJSONObject *Pancr404ApplicationJSON 
    Pancr500ApplicationJSONObject *Pancr500ApplicationJSON 
    Pancr502ApplicationJSONObject *Pancr502ApplicationJSON 
    Pancr503ApplicationJSONObject *Pancr503ApplicationJSON 
    Pancr504ApplicationJSONObject *Pancr504ApplicationJSON 
    
}

