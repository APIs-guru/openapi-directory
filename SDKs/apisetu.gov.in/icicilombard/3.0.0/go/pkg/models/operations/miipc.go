package operations

import (
"openapi/pkg/models/shared")

type MiipcRequestBodyCertificateParameters struct {
    InsuredDob string `json:"InsuredDob"`
    PolicyNo string `json:"PolicyNo"`
    
}


type MiipcRequestBodyFormatEnum string

const (
    MiipcRequestBodyFormatEnumPdf MiipcRequestBodyFormatEnum = "pdf"
)


type MiipcRequestBody struct {
    CertificateParameters *MiipcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format MiipcRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type MiipcSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type MiipcRequest struct {
    Request *MiipcRequestBody `request:"mediaType=application/json"`
    Security MiipcSecurity 
    
}


type Miipc400ApplicationJSONErrorEnum string

const (
    Miipc400ApplicationJSONErrorEnumMissingParameter Miipc400ApplicationJSONErrorEnum = "missing_parameter"
Miipc400ApplicationJSONErrorEnumInvalidParameter Miipc400ApplicationJSONErrorEnum = "invalid_parameter"
Miipc400ApplicationJSONErrorEnumInvalidFormat Miipc400ApplicationJSONErrorEnum = "invalid_format"
Miipc400ApplicationJSONErrorEnumInvalidTxnid Miipc400ApplicationJSONErrorEnum = "invalid_txnid"
Miipc400ApplicationJSONErrorEnumInvalidConsentid Miipc400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Miipc400ApplicationJSONErrorDescriptionEnum string

const (
    Miipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Miipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Miipc400ApplicationJSONErrorDescriptionEnumBadRequest Miipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
Miipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Miipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Miipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Miipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Miipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Miipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Miipc400ApplicationJSON struct {
    Error *Miipc400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc401ApplicationJSONErrorEnum string

const (
    Miipc401ApplicationJSONErrorEnumInvalidAuthentication Miipc401ApplicationJSONErrorEnum = "invalid_authentication"
Miipc401ApplicationJSONErrorEnumInvalidAuthorization Miipc401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Miipc401ApplicationJSONErrorDescriptionEnum string

const (
    Miipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Miipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Miipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Miipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Miipc401ApplicationJSON struct {
    Error *Miipc401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc404ApplicationJSONErrorEnum string

const (
    Miipc404ApplicationJSONErrorEnumRecordNotFound Miipc404ApplicationJSONErrorEnum = "record_not_found"
Miipc404ApplicationJSONErrorEnumURLNotFound Miipc404ApplicationJSONErrorEnum = "url_not_found"
)



type Miipc404ApplicationJSONErrorDescriptionEnum string

const (
    Miipc404ApplicationJSONErrorDescriptionEnumNoRecordFound Miipc404ApplicationJSONErrorDescriptionEnum = "No record found"
Miipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Miipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Miipc404ApplicationJSON struct {
    Error *Miipc404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc500ApplicationJSONErrorEnum string

const (
    Miipc500ApplicationJSONErrorEnumInternalServerError Miipc500ApplicationJSONErrorEnum = "internal_server_error"
)



type Miipc500ApplicationJSONErrorDescriptionEnum string

const (
    Miipc500ApplicationJSONErrorDescriptionEnumInternalServerError Miipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Miipc500ApplicationJSON struct {
    Error *Miipc500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc502ApplicationJSONErrorEnum string

const (
    Miipc502ApplicationJSONErrorEnumBadGatewy Miipc502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Miipc502ApplicationJSONErrorDescriptionEnum string

const (
    Miipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Miipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Miipc502ApplicationJSON struct {
    Error *Miipc502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc503ApplicationJSONErrorEnum string

const (
    Miipc503ApplicationJSONErrorEnumServiceUnavailable Miipc503ApplicationJSONErrorEnum = "service_unavailable"
)



type Miipc503ApplicationJSONErrorDescriptionEnum string

const (
    Miipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Miipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Miipc503ApplicationJSON struct {
    Error *Miipc503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Miipc504ApplicationJSONErrorEnum string

const (
    Miipc504ApplicationJSONErrorEnumGatewayTimeout Miipc504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Miipc504ApplicationJSONErrorDescriptionEnum string

const (
    Miipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Miipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Miipc504ApplicationJSON struct {
    Error *Miipc504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Miipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type MiipcResponse struct {
    ContentType string 
    StatusCode int64 
    Miipc400ApplicationJSONObject *Miipc400ApplicationJSON 
    Miipc401ApplicationJSONObject *Miipc401ApplicationJSON 
    Miipc404ApplicationJSONObject *Miipc404ApplicationJSON 
    Miipc500ApplicationJSONObject *Miipc500ApplicationJSON 
    Miipc502ApplicationJSONObject *Miipc502ApplicationJSON 
    Miipc503ApplicationJSONObject *Miipc503ApplicationJSON 
    Miipc504ApplicationJSONObject *Miipc504ApplicationJSON 
    
}

