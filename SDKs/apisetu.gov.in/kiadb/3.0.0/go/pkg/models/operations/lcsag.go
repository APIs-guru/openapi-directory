package operations

import (
"openapi/pkg/models/shared")

type LcsagRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    RegNum string `json:"RegNum"`
    UID string `json:"UID"`
    
}


type LcsagRequestBodyFormatEnum string

const (
    LcsagRequestBodyFormatEnumPdf LcsagRequestBodyFormatEnum = "pdf"
)


type LcsagRequestBody struct {
    CertificateParameters *LcsagRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format LcsagRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type LcsagSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type LcsagRequest struct {
    Request *LcsagRequestBody `request:"mediaType=application/json"`
    Security LcsagSecurity 
    
}


type Lcsag400ApplicationJSONErrorEnum string

const (
    Lcsag400ApplicationJSONErrorEnumMissingParameter Lcsag400ApplicationJSONErrorEnum = "missing_parameter"
Lcsag400ApplicationJSONErrorEnumInvalidParameter Lcsag400ApplicationJSONErrorEnum = "invalid_parameter"
Lcsag400ApplicationJSONErrorEnumInvalidFormat Lcsag400ApplicationJSONErrorEnum = "invalid_format"
Lcsag400ApplicationJSONErrorEnumInvalidTxnid Lcsag400ApplicationJSONErrorEnum = "invalid_txnid"
Lcsag400ApplicationJSONErrorEnumInvalidConsentid Lcsag400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Lcsag400ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Lcsag400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Lcsag400ApplicationJSONErrorDescriptionEnumBadRequest Lcsag400ApplicationJSONErrorDescriptionEnum = "Bad request"
Lcsag400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Lcsag400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Lcsag400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Lcsag400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Lcsag400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lcsag400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Lcsag400ApplicationJSON struct {
    Error *Lcsag400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag401ApplicationJSONErrorEnum string

const (
    Lcsag401ApplicationJSONErrorEnumInvalidAuthentication Lcsag401ApplicationJSONErrorEnum = "invalid_authentication"
Lcsag401ApplicationJSONErrorEnumInvalidAuthorization Lcsag401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Lcsag401ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Lcsag401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Lcsag401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lcsag401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Lcsag401ApplicationJSON struct {
    Error *Lcsag401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag404ApplicationJSONErrorEnum string

const (
    Lcsag404ApplicationJSONErrorEnumRecordNotFound Lcsag404ApplicationJSONErrorEnum = "record_not_found"
Lcsag404ApplicationJSONErrorEnumURLNotFound Lcsag404ApplicationJSONErrorEnum = "url_not_found"
)



type Lcsag404ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag404ApplicationJSONErrorDescriptionEnumNoRecordFound Lcsag404ApplicationJSONErrorDescriptionEnum = "No record found"
Lcsag404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lcsag404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Lcsag404ApplicationJSON struct {
    Error *Lcsag404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag500ApplicationJSONErrorEnum string

const (
    Lcsag500ApplicationJSONErrorEnumInternalServerError Lcsag500ApplicationJSONErrorEnum = "internal_server_error"
)



type Lcsag500ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag500ApplicationJSONErrorDescriptionEnumInternalServerError Lcsag500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Lcsag500ApplicationJSON struct {
    Error *Lcsag500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag502ApplicationJSONErrorEnum string

const (
    Lcsag502ApplicationJSONErrorEnumBadGatewy Lcsag502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Lcsag502ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lcsag502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Lcsag502ApplicationJSON struct {
    Error *Lcsag502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag503ApplicationJSONErrorEnum string

const (
    Lcsag503ApplicationJSONErrorEnumServiceUnavailable Lcsag503ApplicationJSONErrorEnum = "service_unavailable"
)



type Lcsag503ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lcsag503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Lcsag503ApplicationJSON struct {
    Error *Lcsag503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lcsag504ApplicationJSONErrorEnum string

const (
    Lcsag504ApplicationJSONErrorEnumGatewayTimeout Lcsag504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Lcsag504ApplicationJSONErrorDescriptionEnum string

const (
    Lcsag504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lcsag504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Lcsag504ApplicationJSON struct {
    Error *Lcsag504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lcsag504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type LcsagResponse struct {
    ContentType string 
    StatusCode int64 
    Lcsag400ApplicationJSONObject *Lcsag400ApplicationJSON 
    Lcsag401ApplicationJSONObject *Lcsag401ApplicationJSON 
    Lcsag404ApplicationJSONObject *Lcsag404ApplicationJSON 
    Lcsag500ApplicationJSONObject *Lcsag500ApplicationJSON 
    Lcsag502ApplicationJSONObject *Lcsag502ApplicationJSON 
    Lcsag503ApplicationJSONObject *Lcsag503ApplicationJSON 
    Lcsag504ApplicationJSONObject *Lcsag504ApplicationJSON 
    
}

