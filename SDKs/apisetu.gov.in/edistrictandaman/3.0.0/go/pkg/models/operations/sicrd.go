package operations

import (
"openapi/pkg/models/shared")

type SicrdRequestBodyCertificateParameters struct {
    CertificateNumber string `json:"CertificateNumber"`
    
}


type SicrdRequestBodyFormatEnum string

const (
    SicrdRequestBodyFormatEnumPdf SicrdRequestBodyFormatEnum = "pdf"
)


type SicrdRequestBody struct {
    CertificateParameters *SicrdRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SicrdRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SicrdSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SicrdRequest struct {
    Request *SicrdRequestBody `request:"mediaType=application/json"`
    Security SicrdSecurity 
    
}


type Sicrd400ApplicationJSONErrorEnum string

const (
    Sicrd400ApplicationJSONErrorEnumMissingParameter Sicrd400ApplicationJSONErrorEnum = "missing_parameter"
Sicrd400ApplicationJSONErrorEnumInvalidParameter Sicrd400ApplicationJSONErrorEnum = "invalid_parameter"
Sicrd400ApplicationJSONErrorEnumInvalidFormat Sicrd400ApplicationJSONErrorEnum = "invalid_format"
Sicrd400ApplicationJSONErrorEnumInvalidTxnid Sicrd400ApplicationJSONErrorEnum = "invalid_txnid"
Sicrd400ApplicationJSONErrorEnumInvalidConsentid Sicrd400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Sicrd400ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Sicrd400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Sicrd400ApplicationJSONErrorDescriptionEnumBadRequest Sicrd400ApplicationJSONErrorDescriptionEnum = "Bad request"
Sicrd400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Sicrd400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Sicrd400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Sicrd400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Sicrd400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sicrd400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Sicrd400ApplicationJSON struct {
    Error *Sicrd400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd401ApplicationJSONErrorEnum string

const (
    Sicrd401ApplicationJSONErrorEnumInvalidAuthentication Sicrd401ApplicationJSONErrorEnum = "invalid_authentication"
Sicrd401ApplicationJSONErrorEnumInvalidAuthorization Sicrd401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Sicrd401ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Sicrd401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Sicrd401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sicrd401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Sicrd401ApplicationJSON struct {
    Error *Sicrd401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd404ApplicationJSONErrorEnum string

const (
    Sicrd404ApplicationJSONErrorEnumRecordNotFound Sicrd404ApplicationJSONErrorEnum = "record_not_found"
Sicrd404ApplicationJSONErrorEnumURLNotFound Sicrd404ApplicationJSONErrorEnum = "url_not_found"
)



type Sicrd404ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd404ApplicationJSONErrorDescriptionEnumNoRecordFound Sicrd404ApplicationJSONErrorDescriptionEnum = "No record found"
Sicrd404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sicrd404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Sicrd404ApplicationJSON struct {
    Error *Sicrd404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd500ApplicationJSONErrorEnum string

const (
    Sicrd500ApplicationJSONErrorEnumInternalServerError Sicrd500ApplicationJSONErrorEnum = "internal_server_error"
)



type Sicrd500ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd500ApplicationJSONErrorDescriptionEnumInternalServerError Sicrd500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Sicrd500ApplicationJSON struct {
    Error *Sicrd500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd502ApplicationJSONErrorEnum string

const (
    Sicrd502ApplicationJSONErrorEnumBadGatewy Sicrd502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Sicrd502ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sicrd502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Sicrd502ApplicationJSON struct {
    Error *Sicrd502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd503ApplicationJSONErrorEnum string

const (
    Sicrd503ApplicationJSONErrorEnumServiceUnavailable Sicrd503ApplicationJSONErrorEnum = "service_unavailable"
)



type Sicrd503ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sicrd503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Sicrd503ApplicationJSON struct {
    Error *Sicrd503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sicrd504ApplicationJSONErrorEnum string

const (
    Sicrd504ApplicationJSONErrorEnumGatewayTimeout Sicrd504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Sicrd504ApplicationJSONErrorDescriptionEnum string

const (
    Sicrd504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sicrd504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Sicrd504ApplicationJSON struct {
    Error *Sicrd504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sicrd504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SicrdResponse struct {
    ContentType string 
    StatusCode int64 
    Sicrd400ApplicationJSONObject *Sicrd400ApplicationJSON 
    Sicrd401ApplicationJSONObject *Sicrd401ApplicationJSON 
    Sicrd404ApplicationJSONObject *Sicrd404ApplicationJSON 
    Sicrd500ApplicationJSONObject *Sicrd500ApplicationJSON 
    Sicrd502ApplicationJSONObject *Sicrd502ApplicationJSON 
    Sicrd503ApplicationJSONObject *Sicrd503ApplicationJSON 
    Sicrd504ApplicationJSONObject *Sicrd504ApplicationJSON 
    
}

