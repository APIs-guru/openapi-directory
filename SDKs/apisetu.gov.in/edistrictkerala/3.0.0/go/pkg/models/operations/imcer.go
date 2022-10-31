package operations

import (
"openapi/pkg/models/shared")

type ImcerRequestBodyCertificateParameters struct {
    Aplno string `json:"aplno"`
    Certno string `json:"certno"`
    Sccd string `json:"sccd"`
    
}


type ImcerRequestBodyFormatEnum string

const (
    ImcerRequestBodyFormatEnumPdf ImcerRequestBodyFormatEnum = "pdf"
)


type ImcerRequestBody struct {
    CertificateParameters *ImcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format ImcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type ImcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type ImcerRequest struct {
    Request *ImcerRequestBody `request:"mediaType=application/json"`
    Security ImcerSecurity 
    
}


type Imcer400ApplicationJSONErrorEnum string

const (
    Imcer400ApplicationJSONErrorEnumMissingParameter Imcer400ApplicationJSONErrorEnum = "missing_parameter"
Imcer400ApplicationJSONErrorEnumInvalidParameter Imcer400ApplicationJSONErrorEnum = "invalid_parameter"
Imcer400ApplicationJSONErrorEnumInvalidFormat Imcer400ApplicationJSONErrorEnum = "invalid_format"
Imcer400ApplicationJSONErrorEnumInvalidTxnid Imcer400ApplicationJSONErrorEnum = "invalid_txnid"
Imcer400ApplicationJSONErrorEnumInvalidConsentid Imcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Imcer400ApplicationJSONErrorDescriptionEnum string

const (
    Imcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Imcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Imcer400ApplicationJSONErrorDescriptionEnumBadRequest Imcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Imcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Imcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Imcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Imcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Imcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Imcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Imcer400ApplicationJSON struct {
    Error *Imcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer401ApplicationJSONErrorEnum string

const (
    Imcer401ApplicationJSONErrorEnumInvalidAuthentication Imcer401ApplicationJSONErrorEnum = "invalid_authentication"
Imcer401ApplicationJSONErrorEnumInvalidAuthorization Imcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Imcer401ApplicationJSONErrorDescriptionEnum string

const (
    Imcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Imcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Imcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Imcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Imcer401ApplicationJSON struct {
    Error *Imcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer404ApplicationJSONErrorEnum string

const (
    Imcer404ApplicationJSONErrorEnumRecordNotFound Imcer404ApplicationJSONErrorEnum = "record_not_found"
Imcer404ApplicationJSONErrorEnumURLNotFound Imcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Imcer404ApplicationJSONErrorDescriptionEnum string

const (
    Imcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Imcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Imcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Imcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Imcer404ApplicationJSON struct {
    Error *Imcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer500ApplicationJSONErrorEnum string

const (
    Imcer500ApplicationJSONErrorEnumInternalServerError Imcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Imcer500ApplicationJSONErrorDescriptionEnum string

const (
    Imcer500ApplicationJSONErrorDescriptionEnumInternalServerError Imcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Imcer500ApplicationJSON struct {
    Error *Imcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer502ApplicationJSONErrorEnum string

const (
    Imcer502ApplicationJSONErrorEnumBadGatewy Imcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Imcer502ApplicationJSONErrorDescriptionEnum string

const (
    Imcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Imcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Imcer502ApplicationJSON struct {
    Error *Imcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer503ApplicationJSONErrorEnum string

const (
    Imcer503ApplicationJSONErrorEnumServiceUnavailable Imcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Imcer503ApplicationJSONErrorDescriptionEnum string

const (
    Imcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Imcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Imcer503ApplicationJSON struct {
    Error *Imcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Imcer504ApplicationJSONErrorEnum string

const (
    Imcer504ApplicationJSONErrorEnumGatewayTimeout Imcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Imcer504ApplicationJSONErrorDescriptionEnum string

const (
    Imcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Imcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Imcer504ApplicationJSON struct {
    Error *Imcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Imcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type ImcerResponse struct {
    ContentType string 
    StatusCode int64 
    Imcer400ApplicationJSONObject *Imcer400ApplicationJSON 
    Imcer401ApplicationJSONObject *Imcer401ApplicationJSON 
    Imcer404ApplicationJSONObject *Imcer404ApplicationJSON 
    Imcer500ApplicationJSONObject *Imcer500ApplicationJSON 
    Imcer502ApplicationJSONObject *Imcer502ApplicationJSON 
    Imcer503ApplicationJSONObject *Imcer503ApplicationJSON 
    Imcer504ApplicationJSONObject *Imcer504ApplicationJSON 
    
}

