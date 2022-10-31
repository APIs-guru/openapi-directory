package operations

import (
"openapi/pkg/models/shared")

type SvcerRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    Rroll string `json:"RROLL"`
    RrollCode string `json:"RROLL_CODE"`
    Year string `json:"year"`
    
}


type SvcerRequestBodyFormatEnum string

const (
    SvcerRequestBodyFormatEnumPdf SvcerRequestBodyFormatEnum = "pdf"
)


type SvcerRequestBody struct {
    CertificateParameters *SvcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SvcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SvcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SvcerRequest struct {
    Request *SvcerRequestBody `request:"mediaType=application/json"`
    Security SvcerSecurity 
    
}


type Svcer400ApplicationJSONErrorEnum string

const (
    Svcer400ApplicationJSONErrorEnumMissingParameter Svcer400ApplicationJSONErrorEnum = "missing_parameter"
Svcer400ApplicationJSONErrorEnumInvalidParameter Svcer400ApplicationJSONErrorEnum = "invalid_parameter"
Svcer400ApplicationJSONErrorEnumInvalidFormat Svcer400ApplicationJSONErrorEnum = "invalid_format"
Svcer400ApplicationJSONErrorEnumInvalidTxnid Svcer400ApplicationJSONErrorEnum = "invalid_txnid"
Svcer400ApplicationJSONErrorEnumInvalidConsentid Svcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Svcer400ApplicationJSONErrorDescriptionEnum string

const (
    Svcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Svcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Svcer400ApplicationJSONErrorDescriptionEnumBadRequest Svcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Svcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Svcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Svcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Svcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Svcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Svcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Svcer400ApplicationJSON struct {
    Error *Svcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer401ApplicationJSONErrorEnum string

const (
    Svcer401ApplicationJSONErrorEnumInvalidAuthentication Svcer401ApplicationJSONErrorEnum = "invalid_authentication"
Svcer401ApplicationJSONErrorEnumInvalidAuthorization Svcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Svcer401ApplicationJSONErrorDescriptionEnum string

const (
    Svcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Svcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Svcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Svcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Svcer401ApplicationJSON struct {
    Error *Svcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer404ApplicationJSONErrorEnum string

const (
    Svcer404ApplicationJSONErrorEnumRecordNotFound Svcer404ApplicationJSONErrorEnum = "record_not_found"
Svcer404ApplicationJSONErrorEnumURLNotFound Svcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Svcer404ApplicationJSONErrorDescriptionEnum string

const (
    Svcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Svcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Svcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Svcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Svcer404ApplicationJSON struct {
    Error *Svcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer500ApplicationJSONErrorEnum string

const (
    Svcer500ApplicationJSONErrorEnumInternalServerError Svcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Svcer500ApplicationJSONErrorDescriptionEnum string

const (
    Svcer500ApplicationJSONErrorDescriptionEnumInternalServerError Svcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Svcer500ApplicationJSON struct {
    Error *Svcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer502ApplicationJSONErrorEnum string

const (
    Svcer502ApplicationJSONErrorEnumBadGatewy Svcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Svcer502ApplicationJSONErrorDescriptionEnum string

const (
    Svcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Svcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Svcer502ApplicationJSON struct {
    Error *Svcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer503ApplicationJSONErrorEnum string

const (
    Svcer503ApplicationJSONErrorEnumServiceUnavailable Svcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Svcer503ApplicationJSONErrorDescriptionEnum string

const (
    Svcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Svcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Svcer503ApplicationJSON struct {
    Error *Svcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Svcer504ApplicationJSONErrorEnum string

const (
    Svcer504ApplicationJSONErrorEnumGatewayTimeout Svcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Svcer504ApplicationJSONErrorDescriptionEnum string

const (
    Svcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Svcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Svcer504ApplicationJSON struct {
    Error *Svcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Svcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SvcerResponse struct {
    ContentType string 
    StatusCode int64 
    Svcer400ApplicationJSONObject *Svcer400ApplicationJSON 
    Svcer401ApplicationJSONObject *Svcer401ApplicationJSON 
    Svcer404ApplicationJSONObject *Svcer404ApplicationJSON 
    Svcer500ApplicationJSONObject *Svcer500ApplicationJSON 
    Svcer502ApplicationJSONObject *Svcer502ApplicationJSON 
    Svcer503ApplicationJSONObject *Svcer503ApplicationJSON 
    Svcer504ApplicationJSONObject *Svcer504ApplicationJSON 
    
}

