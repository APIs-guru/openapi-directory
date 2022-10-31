package operations

import (
"openapi/pkg/models/shared")

type CtcerRequestBodyCertificateParameters struct {
    Aplno string `json:"aplno"`
    Certno string `json:"certno"`
    Sccd string `json:"sccd"`
    
}


type CtcerRequestBodyFormatEnum string

const (
    CtcerRequestBodyFormatEnumPdf CtcerRequestBodyFormatEnum = "pdf"
)


type CtcerRequestBody struct {
    CertificateParameters *CtcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format CtcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type CtcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type CtcerRequest struct {
    Request *CtcerRequestBody `request:"mediaType=application/json"`
    Security CtcerSecurity 
    
}


type Ctcer400ApplicationJSONErrorEnum string

const (
    Ctcer400ApplicationJSONErrorEnumMissingParameter Ctcer400ApplicationJSONErrorEnum = "missing_parameter"
Ctcer400ApplicationJSONErrorEnumInvalidParameter Ctcer400ApplicationJSONErrorEnum = "invalid_parameter"
Ctcer400ApplicationJSONErrorEnumInvalidFormat Ctcer400ApplicationJSONErrorEnum = "invalid_format"
Ctcer400ApplicationJSONErrorEnumInvalidTxnid Ctcer400ApplicationJSONErrorEnum = "invalid_txnid"
Ctcer400ApplicationJSONErrorEnumInvalidConsentid Ctcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Ctcer400ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Ctcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Ctcer400ApplicationJSONErrorDescriptionEnumBadRequest Ctcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Ctcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Ctcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Ctcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Ctcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Ctcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ctcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Ctcer400ApplicationJSON struct {
    Error *Ctcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer401ApplicationJSONErrorEnum string

const (
    Ctcer401ApplicationJSONErrorEnumInvalidAuthentication Ctcer401ApplicationJSONErrorEnum = "invalid_authentication"
Ctcer401ApplicationJSONErrorEnumInvalidAuthorization Ctcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Ctcer401ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Ctcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Ctcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ctcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Ctcer401ApplicationJSON struct {
    Error *Ctcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer404ApplicationJSONErrorEnum string

const (
    Ctcer404ApplicationJSONErrorEnumRecordNotFound Ctcer404ApplicationJSONErrorEnum = "record_not_found"
Ctcer404ApplicationJSONErrorEnumURLNotFound Ctcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Ctcer404ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Ctcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Ctcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ctcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Ctcer404ApplicationJSON struct {
    Error *Ctcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer500ApplicationJSONErrorEnum string

const (
    Ctcer500ApplicationJSONErrorEnumInternalServerError Ctcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Ctcer500ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer500ApplicationJSONErrorDescriptionEnumInternalServerError Ctcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Ctcer500ApplicationJSON struct {
    Error *Ctcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer502ApplicationJSONErrorEnum string

const (
    Ctcer502ApplicationJSONErrorEnumBadGatewy Ctcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Ctcer502ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ctcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Ctcer502ApplicationJSON struct {
    Error *Ctcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer503ApplicationJSONErrorEnum string

const (
    Ctcer503ApplicationJSONErrorEnumServiceUnavailable Ctcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Ctcer503ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ctcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Ctcer503ApplicationJSON struct {
    Error *Ctcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ctcer504ApplicationJSONErrorEnum string

const (
    Ctcer504ApplicationJSONErrorEnumGatewayTimeout Ctcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Ctcer504ApplicationJSONErrorDescriptionEnum string

const (
    Ctcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ctcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Ctcer504ApplicationJSON struct {
    Error *Ctcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ctcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type CtcerResponse struct {
    ContentType string 
    StatusCode int64 
    Ctcer400ApplicationJSONObject *Ctcer400ApplicationJSON 
    Ctcer401ApplicationJSONObject *Ctcer401ApplicationJSON 
    Ctcer404ApplicationJSONObject *Ctcer404ApplicationJSON 
    Ctcer500ApplicationJSONObject *Ctcer500ApplicationJSON 
    Ctcer502ApplicationJSONObject *Ctcer502ApplicationJSON 
    Ctcer503ApplicationJSONObject *Ctcer503ApplicationJSON 
    Ctcer504ApplicationJSONObject *Ctcer504ApplicationJSON 
    
}

