package operations

import (
"openapi/pkg/models/shared")

type CocerRequestBodyCertificateParameters struct {
    CertType string `json:"cert_type"`
    CompanyName string `json:"company_name"`
    RegNo string `json:"reg_no"`
    Sector string `json:"sector"`
    
}


type CocerRequestBodyFormatEnum string

const (
    CocerRequestBodyFormatEnumPdf CocerRequestBodyFormatEnum = "pdf"
)


type CocerRequestBody struct {
    CertificateParameters *CocerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format CocerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type CocerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type CocerRequest struct {
    Request *CocerRequestBody `request:"mediaType=application/json"`
    Security CocerSecurity 
    
}


type Cocer400ApplicationJSONErrorEnum string

const (
    Cocer400ApplicationJSONErrorEnumMissingParameter Cocer400ApplicationJSONErrorEnum = "missing_parameter"
Cocer400ApplicationJSONErrorEnumInvalidParameter Cocer400ApplicationJSONErrorEnum = "invalid_parameter"
Cocer400ApplicationJSONErrorEnumInvalidFormat Cocer400ApplicationJSONErrorEnum = "invalid_format"
Cocer400ApplicationJSONErrorEnumInvalidTxnid Cocer400ApplicationJSONErrorEnum = "invalid_txnid"
Cocer400ApplicationJSONErrorEnumInvalidConsentid Cocer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Cocer400ApplicationJSONErrorDescriptionEnum string

const (
    Cocer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Cocer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Cocer400ApplicationJSONErrorDescriptionEnumBadRequest Cocer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Cocer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Cocer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Cocer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Cocer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Cocer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cocer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Cocer400ApplicationJSON struct {
    Error *Cocer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer401ApplicationJSONErrorEnum string

const (
    Cocer401ApplicationJSONErrorEnumInvalidAuthentication Cocer401ApplicationJSONErrorEnum = "invalid_authentication"
Cocer401ApplicationJSONErrorEnumInvalidAuthorization Cocer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Cocer401ApplicationJSONErrorDescriptionEnum string

const (
    Cocer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Cocer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Cocer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cocer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Cocer401ApplicationJSON struct {
    Error *Cocer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer404ApplicationJSONErrorEnum string

const (
    Cocer404ApplicationJSONErrorEnumRecordNotFound Cocer404ApplicationJSONErrorEnum = "record_not_found"
Cocer404ApplicationJSONErrorEnumURLNotFound Cocer404ApplicationJSONErrorEnum = "url_not_found"
)



type Cocer404ApplicationJSONErrorDescriptionEnum string

const (
    Cocer404ApplicationJSONErrorDescriptionEnumNoRecordFound Cocer404ApplicationJSONErrorDescriptionEnum = "No record found"
Cocer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cocer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Cocer404ApplicationJSON struct {
    Error *Cocer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer500ApplicationJSONErrorEnum string

const (
    Cocer500ApplicationJSONErrorEnumInternalServerError Cocer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Cocer500ApplicationJSONErrorDescriptionEnum string

const (
    Cocer500ApplicationJSONErrorDescriptionEnumInternalServerError Cocer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Cocer500ApplicationJSON struct {
    Error *Cocer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer502ApplicationJSONErrorEnum string

const (
    Cocer502ApplicationJSONErrorEnumBadGatewy Cocer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Cocer502ApplicationJSONErrorDescriptionEnum string

const (
    Cocer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cocer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Cocer502ApplicationJSON struct {
    Error *Cocer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer503ApplicationJSONErrorEnum string

const (
    Cocer503ApplicationJSONErrorEnumServiceUnavailable Cocer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Cocer503ApplicationJSONErrorDescriptionEnum string

const (
    Cocer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cocer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Cocer503ApplicationJSON struct {
    Error *Cocer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cocer504ApplicationJSONErrorEnum string

const (
    Cocer504ApplicationJSONErrorEnumGatewayTimeout Cocer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Cocer504ApplicationJSONErrorDescriptionEnum string

const (
    Cocer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cocer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Cocer504ApplicationJSON struct {
    Error *Cocer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cocer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type CocerResponse struct {
    ContentType string 
    StatusCode int64 
    Cocer400ApplicationJSONObject *Cocer400ApplicationJSON 
    Cocer401ApplicationJSONObject *Cocer401ApplicationJSON 
    Cocer404ApplicationJSONObject *Cocer404ApplicationJSON 
    Cocer500ApplicationJSONObject *Cocer500ApplicationJSON 
    Cocer502ApplicationJSONObject *Cocer502ApplicationJSON 
    Cocer503ApplicationJSONObject *Cocer503ApplicationJSON 
    Cocer504ApplicationJSONObject *Cocer504ApplicationJSON 
    
}

