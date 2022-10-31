package operations

import (
"openapi/pkg/models/shared")

type MpkbyRequestBodyCertificateParameters struct {
    RefNo string `json:"RefNo"`
    TokenNo string `json:"TokenNo"`
    
}


type MpkbyRequestBodyFormatEnum string

const (
    MpkbyRequestBodyFormatEnumPdf MpkbyRequestBodyFormatEnum = "pdf"
)


type MpkbyRequestBody struct {
    CertificateParameters *MpkbyRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format MpkbyRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type MpkbySecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type MpkbyRequest struct {
    Request *MpkbyRequestBody `request:"mediaType=application/json"`
    Security MpkbySecurity 
    
}


type Mpkby400ApplicationJSONErrorEnum string

const (
    Mpkby400ApplicationJSONErrorEnumMissingParameter Mpkby400ApplicationJSONErrorEnum = "missing_parameter"
Mpkby400ApplicationJSONErrorEnumInvalidParameter Mpkby400ApplicationJSONErrorEnum = "invalid_parameter"
Mpkby400ApplicationJSONErrorEnumInvalidFormat Mpkby400ApplicationJSONErrorEnum = "invalid_format"
Mpkby400ApplicationJSONErrorEnumInvalidTxnid Mpkby400ApplicationJSONErrorEnum = "invalid_txnid"
Mpkby400ApplicationJSONErrorEnumInvalidConsentid Mpkby400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Mpkby400ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Mpkby400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Mpkby400ApplicationJSONErrorDescriptionEnumBadRequest Mpkby400ApplicationJSONErrorDescriptionEnum = "Bad request"
Mpkby400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Mpkby400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Mpkby400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Mpkby400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Mpkby400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mpkby400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Mpkby400ApplicationJSON struct {
    Error *Mpkby400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby401ApplicationJSONErrorEnum string

const (
    Mpkby401ApplicationJSONErrorEnumInvalidAuthentication Mpkby401ApplicationJSONErrorEnum = "invalid_authentication"
Mpkby401ApplicationJSONErrorEnumInvalidAuthorization Mpkby401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Mpkby401ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Mpkby401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Mpkby401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mpkby401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Mpkby401ApplicationJSON struct {
    Error *Mpkby401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby404ApplicationJSONErrorEnum string

const (
    Mpkby404ApplicationJSONErrorEnumRecordNotFound Mpkby404ApplicationJSONErrorEnum = "record_not_found"
Mpkby404ApplicationJSONErrorEnumURLNotFound Mpkby404ApplicationJSONErrorEnum = "url_not_found"
)



type Mpkby404ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby404ApplicationJSONErrorDescriptionEnumNoRecordFound Mpkby404ApplicationJSONErrorDescriptionEnum = "No record found"
Mpkby404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mpkby404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Mpkby404ApplicationJSON struct {
    Error *Mpkby404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby500ApplicationJSONErrorEnum string

const (
    Mpkby500ApplicationJSONErrorEnumInternalServerError Mpkby500ApplicationJSONErrorEnum = "internal_server_error"
)



type Mpkby500ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby500ApplicationJSONErrorDescriptionEnumInternalServerError Mpkby500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Mpkby500ApplicationJSON struct {
    Error *Mpkby500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby502ApplicationJSONErrorEnum string

const (
    Mpkby502ApplicationJSONErrorEnumBadGatewy Mpkby502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Mpkby502ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mpkby502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Mpkby502ApplicationJSON struct {
    Error *Mpkby502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby503ApplicationJSONErrorEnum string

const (
    Mpkby503ApplicationJSONErrorEnumServiceUnavailable Mpkby503ApplicationJSONErrorEnum = "service_unavailable"
)



type Mpkby503ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mpkby503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Mpkby503ApplicationJSON struct {
    Error *Mpkby503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mpkby504ApplicationJSONErrorEnum string

const (
    Mpkby504ApplicationJSONErrorEnumGatewayTimeout Mpkby504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Mpkby504ApplicationJSONErrorDescriptionEnum string

const (
    Mpkby504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mpkby504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Mpkby504ApplicationJSON struct {
    Error *Mpkby504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mpkby504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type MpkbyResponse struct {
    ContentType string 
    StatusCode int64 
    Mpkby400ApplicationJSONObject *Mpkby400ApplicationJSON 
    Mpkby401ApplicationJSONObject *Mpkby401ApplicationJSON 
    Mpkby404ApplicationJSONObject *Mpkby404ApplicationJSON 
    Mpkby500ApplicationJSONObject *Mpkby500ApplicationJSON 
    Mpkby502ApplicationJSONObject *Mpkby502ApplicationJSON 
    Mpkby503ApplicationJSONObject *Mpkby503ApplicationJSON 
    Mpkby504ApplicationJSONObject *Mpkby504ApplicationJSON 
    
}

