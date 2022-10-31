package operations

import (
"openapi/pkg/models/shared")

type DipcrRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    RollNo string `json:"RollNo"`
    
}


type DipcrRequestBodyFormatEnum string

const (
    DipcrRequestBodyFormatEnumPdf DipcrRequestBodyFormatEnum = "pdf"
)


type DipcrRequestBody struct {
    CertificateParameters *DipcrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format DipcrRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type DipcrSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type DipcrRequest struct {
    Request *DipcrRequestBody `request:"mediaType=application/json"`
    Security DipcrSecurity 
    
}


type Dipcr400ApplicationJSONErrorEnum string

const (
    Dipcr400ApplicationJSONErrorEnumMissingParameter Dipcr400ApplicationJSONErrorEnum = "missing_parameter"
Dipcr400ApplicationJSONErrorEnumInvalidParameter Dipcr400ApplicationJSONErrorEnum = "invalid_parameter"
Dipcr400ApplicationJSONErrorEnumInvalidFormat Dipcr400ApplicationJSONErrorEnum = "invalid_format"
Dipcr400ApplicationJSONErrorEnumInvalidTxnid Dipcr400ApplicationJSONErrorEnum = "invalid_txnid"
Dipcr400ApplicationJSONErrorEnumInvalidConsentid Dipcr400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Dipcr400ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Dipcr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Dipcr400ApplicationJSONErrorDescriptionEnumBadRequest Dipcr400ApplicationJSONErrorDescriptionEnum = "Bad request"
Dipcr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Dipcr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Dipcr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Dipcr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Dipcr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dipcr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Dipcr400ApplicationJSON struct {
    Error *Dipcr400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr401ApplicationJSONErrorEnum string

const (
    Dipcr401ApplicationJSONErrorEnumInvalidAuthentication Dipcr401ApplicationJSONErrorEnum = "invalid_authentication"
Dipcr401ApplicationJSONErrorEnumInvalidAuthorization Dipcr401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Dipcr401ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Dipcr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Dipcr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dipcr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Dipcr401ApplicationJSON struct {
    Error *Dipcr401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr404ApplicationJSONErrorEnum string

const (
    Dipcr404ApplicationJSONErrorEnumRecordNotFound Dipcr404ApplicationJSONErrorEnum = "record_not_found"
Dipcr404ApplicationJSONErrorEnumURLNotFound Dipcr404ApplicationJSONErrorEnum = "url_not_found"
)



type Dipcr404ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr404ApplicationJSONErrorDescriptionEnumNoRecordFound Dipcr404ApplicationJSONErrorDescriptionEnum = "No record found"
Dipcr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dipcr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Dipcr404ApplicationJSON struct {
    Error *Dipcr404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr500ApplicationJSONErrorEnum string

const (
    Dipcr500ApplicationJSONErrorEnumInternalServerError Dipcr500ApplicationJSONErrorEnum = "internal_server_error"
)



type Dipcr500ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr500ApplicationJSONErrorDescriptionEnumInternalServerError Dipcr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Dipcr500ApplicationJSON struct {
    Error *Dipcr500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr502ApplicationJSONErrorEnum string

const (
    Dipcr502ApplicationJSONErrorEnumBadGatewy Dipcr502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Dipcr502ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dipcr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Dipcr502ApplicationJSON struct {
    Error *Dipcr502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr503ApplicationJSONErrorEnum string

const (
    Dipcr503ApplicationJSONErrorEnumServiceUnavailable Dipcr503ApplicationJSONErrorEnum = "service_unavailable"
)



type Dipcr503ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dipcr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Dipcr503ApplicationJSON struct {
    Error *Dipcr503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dipcr504ApplicationJSONErrorEnum string

const (
    Dipcr504ApplicationJSONErrorEnumGatewayTimeout Dipcr504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Dipcr504ApplicationJSONErrorDescriptionEnum string

const (
    Dipcr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dipcr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Dipcr504ApplicationJSON struct {
    Error *Dipcr504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dipcr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type DipcrResponse struct {
    ContentType string 
    StatusCode int64 
    Dipcr400ApplicationJSONObject *Dipcr400ApplicationJSON 
    Dipcr401ApplicationJSONObject *Dipcr401ApplicationJSON 
    Dipcr404ApplicationJSONObject *Dipcr404ApplicationJSON 
    Dipcr500ApplicationJSONObject *Dipcr500ApplicationJSON 
    Dipcr502ApplicationJSONObject *Dipcr502ApplicationJSON 
    Dipcr503ApplicationJSONObject *Dipcr503ApplicationJSON 
    Dipcr504ApplicationJSONObject *Dipcr504ApplicationJSON 
    
}

