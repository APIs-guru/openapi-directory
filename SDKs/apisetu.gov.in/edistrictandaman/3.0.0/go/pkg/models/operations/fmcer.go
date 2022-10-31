package operations

import (
"openapi/pkg/models/shared")

type FmcerRequestBodyCertificateParameters struct {
    CertificateNumber string `json:"CertificateNumber"`
    
}


type FmcerRequestBodyFormatEnum string

const (
    FmcerRequestBodyFormatEnumPdf FmcerRequestBodyFormatEnum = "pdf"
)


type FmcerRequestBody struct {
    CertificateParameters *FmcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format FmcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type FmcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type FmcerRequest struct {
    Request *FmcerRequestBody `request:"mediaType=application/json"`
    Security FmcerSecurity 
    
}


type Fmcer400ApplicationJSONErrorEnum string

const (
    Fmcer400ApplicationJSONErrorEnumMissingParameter Fmcer400ApplicationJSONErrorEnum = "missing_parameter"
Fmcer400ApplicationJSONErrorEnumInvalidParameter Fmcer400ApplicationJSONErrorEnum = "invalid_parameter"
Fmcer400ApplicationJSONErrorEnumInvalidFormat Fmcer400ApplicationJSONErrorEnum = "invalid_format"
Fmcer400ApplicationJSONErrorEnumInvalidTxnid Fmcer400ApplicationJSONErrorEnum = "invalid_txnid"
Fmcer400ApplicationJSONErrorEnumInvalidConsentid Fmcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Fmcer400ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Fmcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Fmcer400ApplicationJSONErrorDescriptionEnumBadRequest Fmcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Fmcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Fmcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Fmcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Fmcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Fmcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Fmcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Fmcer400ApplicationJSON struct {
    Error *Fmcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer401ApplicationJSONErrorEnum string

const (
    Fmcer401ApplicationJSONErrorEnumInvalidAuthentication Fmcer401ApplicationJSONErrorEnum = "invalid_authentication"
Fmcer401ApplicationJSONErrorEnumInvalidAuthorization Fmcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Fmcer401ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Fmcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Fmcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Fmcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Fmcer401ApplicationJSON struct {
    Error *Fmcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer404ApplicationJSONErrorEnum string

const (
    Fmcer404ApplicationJSONErrorEnumRecordNotFound Fmcer404ApplicationJSONErrorEnum = "record_not_found"
Fmcer404ApplicationJSONErrorEnumURLNotFound Fmcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Fmcer404ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Fmcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Fmcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Fmcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Fmcer404ApplicationJSON struct {
    Error *Fmcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer500ApplicationJSONErrorEnum string

const (
    Fmcer500ApplicationJSONErrorEnumInternalServerError Fmcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Fmcer500ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer500ApplicationJSONErrorDescriptionEnumInternalServerError Fmcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Fmcer500ApplicationJSON struct {
    Error *Fmcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer502ApplicationJSONErrorEnum string

const (
    Fmcer502ApplicationJSONErrorEnumBadGatewy Fmcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Fmcer502ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Fmcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Fmcer502ApplicationJSON struct {
    Error *Fmcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer503ApplicationJSONErrorEnum string

const (
    Fmcer503ApplicationJSONErrorEnumServiceUnavailable Fmcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Fmcer503ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Fmcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Fmcer503ApplicationJSON struct {
    Error *Fmcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Fmcer504ApplicationJSONErrorEnum string

const (
    Fmcer504ApplicationJSONErrorEnumGatewayTimeout Fmcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Fmcer504ApplicationJSONErrorDescriptionEnum string

const (
    Fmcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Fmcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Fmcer504ApplicationJSON struct {
    Error *Fmcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Fmcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type FmcerResponse struct {
    ContentType string 
    StatusCode int64 
    Fmcer400ApplicationJSONObject *Fmcer400ApplicationJSON 
    Fmcer401ApplicationJSONObject *Fmcer401ApplicationJSON 
    Fmcer404ApplicationJSONObject *Fmcer404ApplicationJSON 
    Fmcer500ApplicationJSONObject *Fmcer500ApplicationJSON 
    Fmcer502ApplicationJSONObject *Fmcer502ApplicationJSON 
    Fmcer503ApplicationJSONObject *Fmcer503ApplicationJSON 
    Fmcer504ApplicationJSONObject *Fmcer504ApplicationJSON 
    
}

