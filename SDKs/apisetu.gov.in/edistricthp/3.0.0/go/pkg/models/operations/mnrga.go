package operations

import (
"openapi/pkg/models/shared")

type MnrgaRequestBodyCertificateParameters struct {
    Udf1 string `json:"UDF1"`
    
}


type MnrgaRequestBodyFormatEnum string

const (
    MnrgaRequestBodyFormatEnumPdf MnrgaRequestBodyFormatEnum = "pdf"
)


type MnrgaRequestBody struct {
    CertificateParameters *MnrgaRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format MnrgaRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type MnrgaSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type MnrgaRequest struct {
    Request *MnrgaRequestBody `request:"mediaType=application/json"`
    Security MnrgaSecurity 
    
}


type Mnrga400ApplicationJSONErrorEnum string

const (
    Mnrga400ApplicationJSONErrorEnumMissingParameter Mnrga400ApplicationJSONErrorEnum = "missing_parameter"
Mnrga400ApplicationJSONErrorEnumInvalidParameter Mnrga400ApplicationJSONErrorEnum = "invalid_parameter"
Mnrga400ApplicationJSONErrorEnumInvalidFormat Mnrga400ApplicationJSONErrorEnum = "invalid_format"
Mnrga400ApplicationJSONErrorEnumInvalidTxnid Mnrga400ApplicationJSONErrorEnum = "invalid_txnid"
Mnrga400ApplicationJSONErrorEnumInvalidConsentid Mnrga400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Mnrga400ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Mnrga400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Mnrga400ApplicationJSONErrorDescriptionEnumBadRequest Mnrga400ApplicationJSONErrorDescriptionEnum = "Bad request"
Mnrga400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Mnrga400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Mnrga400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Mnrga400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Mnrga400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Mnrga400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Mnrga400ApplicationJSON struct {
    Error *Mnrga400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga401ApplicationJSONErrorEnum string

const (
    Mnrga401ApplicationJSONErrorEnumInvalidAuthentication Mnrga401ApplicationJSONErrorEnum = "invalid_authentication"
Mnrga401ApplicationJSONErrorEnumInvalidAuthorization Mnrga401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Mnrga401ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Mnrga401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Mnrga401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Mnrga401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Mnrga401ApplicationJSON struct {
    Error *Mnrga401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga404ApplicationJSONErrorEnum string

const (
    Mnrga404ApplicationJSONErrorEnumRecordNotFound Mnrga404ApplicationJSONErrorEnum = "record_not_found"
Mnrga404ApplicationJSONErrorEnumURLNotFound Mnrga404ApplicationJSONErrorEnum = "url_not_found"
)



type Mnrga404ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga404ApplicationJSONErrorDescriptionEnumNoRecordFound Mnrga404ApplicationJSONErrorDescriptionEnum = "No record found"
Mnrga404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Mnrga404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Mnrga404ApplicationJSON struct {
    Error *Mnrga404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga500ApplicationJSONErrorEnum string

const (
    Mnrga500ApplicationJSONErrorEnumInternalServerError Mnrga500ApplicationJSONErrorEnum = "internal_server_error"
)



type Mnrga500ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga500ApplicationJSONErrorDescriptionEnumInternalServerError Mnrga500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Mnrga500ApplicationJSON struct {
    Error *Mnrga500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga502ApplicationJSONErrorEnum string

const (
    Mnrga502ApplicationJSONErrorEnumBadGatewy Mnrga502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Mnrga502ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Mnrga502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Mnrga502ApplicationJSON struct {
    Error *Mnrga502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga503ApplicationJSONErrorEnum string

const (
    Mnrga503ApplicationJSONErrorEnumServiceUnavailable Mnrga503ApplicationJSONErrorEnum = "service_unavailable"
)



type Mnrga503ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Mnrga503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Mnrga503ApplicationJSON struct {
    Error *Mnrga503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Mnrga504ApplicationJSONErrorEnum string

const (
    Mnrga504ApplicationJSONErrorEnumGatewayTimeout Mnrga504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Mnrga504ApplicationJSONErrorDescriptionEnum string

const (
    Mnrga504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Mnrga504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Mnrga504ApplicationJSON struct {
    Error *Mnrga504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Mnrga504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type MnrgaResponse struct {
    ContentType string 
    StatusCode int64 
    Mnrga400ApplicationJSONObject *Mnrga400ApplicationJSON 
    Mnrga401ApplicationJSONObject *Mnrga401ApplicationJSON 
    Mnrga404ApplicationJSONObject *Mnrga404ApplicationJSON 
    Mnrga500ApplicationJSONObject *Mnrga500ApplicationJSON 
    Mnrga502ApplicationJSONObject *Mnrga502ApplicationJSON 
    Mnrga503ApplicationJSONObject *Mnrga503ApplicationJSON 
    Mnrga504ApplicationJSONObject *Mnrga504ApplicationJSON 
    
}

