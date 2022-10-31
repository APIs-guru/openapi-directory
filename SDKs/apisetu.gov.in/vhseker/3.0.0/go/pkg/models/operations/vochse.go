package operations

import (
"openapi/pkg/models/shared")

type VochseRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    Regno string `json:"Regno"`
    Year string `json:"Year"`
    Type string `json:"type"`
    
}


type VochseRequestBodyFormatEnum string

const (
    VochseRequestBodyFormatEnumPdf VochseRequestBodyFormatEnum = "pdf"
)


type VochseRequestBody struct {
    CertificateParameters *VochseRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format VochseRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type VochseSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type VochseRequest struct {
    Request *VochseRequestBody `request:"mediaType=application/json"`
    Security VochseSecurity 
    
}


type Vochse400ApplicationJSONErrorEnum string

const (
    Vochse400ApplicationJSONErrorEnumMissingParameter Vochse400ApplicationJSONErrorEnum = "missing_parameter"
Vochse400ApplicationJSONErrorEnumInvalidParameter Vochse400ApplicationJSONErrorEnum = "invalid_parameter"
Vochse400ApplicationJSONErrorEnumInvalidFormat Vochse400ApplicationJSONErrorEnum = "invalid_format"
Vochse400ApplicationJSONErrorEnumInvalidTxnid Vochse400ApplicationJSONErrorEnum = "invalid_txnid"
Vochse400ApplicationJSONErrorEnumInvalidConsentid Vochse400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Vochse400ApplicationJSONErrorDescriptionEnum string

const (
    Vochse400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Vochse400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Vochse400ApplicationJSONErrorDescriptionEnumBadRequest Vochse400ApplicationJSONErrorDescriptionEnum = "Bad request"
Vochse400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Vochse400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Vochse400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Vochse400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Vochse400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Vochse400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Vochse400ApplicationJSON struct {
    Error *Vochse400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse401ApplicationJSONErrorEnum string

const (
    Vochse401ApplicationJSONErrorEnumInvalidAuthentication Vochse401ApplicationJSONErrorEnum = "invalid_authentication"
Vochse401ApplicationJSONErrorEnumInvalidAuthorization Vochse401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Vochse401ApplicationJSONErrorDescriptionEnum string

const (
    Vochse401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Vochse401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Vochse401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Vochse401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Vochse401ApplicationJSON struct {
    Error *Vochse401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse404ApplicationJSONErrorEnum string

const (
    Vochse404ApplicationJSONErrorEnumRecordNotFound Vochse404ApplicationJSONErrorEnum = "record_not_found"
Vochse404ApplicationJSONErrorEnumURLNotFound Vochse404ApplicationJSONErrorEnum = "url_not_found"
)



type Vochse404ApplicationJSONErrorDescriptionEnum string

const (
    Vochse404ApplicationJSONErrorDescriptionEnumNoRecordFound Vochse404ApplicationJSONErrorDescriptionEnum = "No record found"
Vochse404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Vochse404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Vochse404ApplicationJSON struct {
    Error *Vochse404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse500ApplicationJSONErrorEnum string

const (
    Vochse500ApplicationJSONErrorEnumInternalServerError Vochse500ApplicationJSONErrorEnum = "internal_server_error"
)



type Vochse500ApplicationJSONErrorDescriptionEnum string

const (
    Vochse500ApplicationJSONErrorDescriptionEnumInternalServerError Vochse500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Vochse500ApplicationJSON struct {
    Error *Vochse500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse502ApplicationJSONErrorEnum string

const (
    Vochse502ApplicationJSONErrorEnumBadGatewy Vochse502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Vochse502ApplicationJSONErrorDescriptionEnum string

const (
    Vochse502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Vochse502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Vochse502ApplicationJSON struct {
    Error *Vochse502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse503ApplicationJSONErrorEnum string

const (
    Vochse503ApplicationJSONErrorEnumServiceUnavailable Vochse503ApplicationJSONErrorEnum = "service_unavailable"
)



type Vochse503ApplicationJSONErrorDescriptionEnum string

const (
    Vochse503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Vochse503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Vochse503ApplicationJSON struct {
    Error *Vochse503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Vochse504ApplicationJSONErrorEnum string

const (
    Vochse504ApplicationJSONErrorEnumGatewayTimeout Vochse504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Vochse504ApplicationJSONErrorDescriptionEnum string

const (
    Vochse504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Vochse504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Vochse504ApplicationJSON struct {
    Error *Vochse504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Vochse504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type VochseResponse struct {
    ContentType string 
    StatusCode int64 
    Vochse400ApplicationJSONObject *Vochse400ApplicationJSON 
    Vochse401ApplicationJSONObject *Vochse401ApplicationJSON 
    Vochse404ApplicationJSONObject *Vochse404ApplicationJSON 
    Vochse500ApplicationJSONObject *Vochse500ApplicationJSON 
    Vochse502ApplicationJSONObject *Vochse502ApplicationJSON 
    Vochse503ApplicationJSONObject *Vochse503ApplicationJSON 
    Vochse504ApplicationJSONObject *Vochse504ApplicationJSON 
    
}

