package operations

import (
"openapi/pkg/models/shared")

type RfcerRequestBodyCertificateParameters struct {
    CertType string `json:"cert_type"`
    CompanyName string `json:"company_name"`
    RegNo string `json:"reg_no"`
    Sector string `json:"sector"`
    
}


type RfcerRequestBodyFormatEnum string

const (
    RfcerRequestBodyFormatEnumPdf RfcerRequestBodyFormatEnum = "pdf"
)


type RfcerRequestBody struct {
    CertificateParameters *RfcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format RfcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type RfcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type RfcerRequest struct {
    Request *RfcerRequestBody `request:"mediaType=application/json"`
    Security RfcerSecurity 
    
}


type Rfcer400ApplicationJSONErrorEnum string

const (
    Rfcer400ApplicationJSONErrorEnumMissingParameter Rfcer400ApplicationJSONErrorEnum = "missing_parameter"
Rfcer400ApplicationJSONErrorEnumInvalidParameter Rfcer400ApplicationJSONErrorEnum = "invalid_parameter"
Rfcer400ApplicationJSONErrorEnumInvalidFormat Rfcer400ApplicationJSONErrorEnum = "invalid_format"
Rfcer400ApplicationJSONErrorEnumInvalidTxnid Rfcer400ApplicationJSONErrorEnum = "invalid_txnid"
Rfcer400ApplicationJSONErrorEnumInvalidConsentid Rfcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Rfcer400ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Rfcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Rfcer400ApplicationJSONErrorDescriptionEnumBadRequest Rfcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Rfcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Rfcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Rfcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Rfcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Rfcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rfcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Rfcer400ApplicationJSON struct {
    Error *Rfcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer401ApplicationJSONErrorEnum string

const (
    Rfcer401ApplicationJSONErrorEnumInvalidAuthentication Rfcer401ApplicationJSONErrorEnum = "invalid_authentication"
Rfcer401ApplicationJSONErrorEnumInvalidAuthorization Rfcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Rfcer401ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Rfcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Rfcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rfcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Rfcer401ApplicationJSON struct {
    Error *Rfcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer404ApplicationJSONErrorEnum string

const (
    Rfcer404ApplicationJSONErrorEnumRecordNotFound Rfcer404ApplicationJSONErrorEnum = "record_not_found"
Rfcer404ApplicationJSONErrorEnumURLNotFound Rfcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Rfcer404ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Rfcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Rfcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rfcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Rfcer404ApplicationJSON struct {
    Error *Rfcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer500ApplicationJSONErrorEnum string

const (
    Rfcer500ApplicationJSONErrorEnumInternalServerError Rfcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Rfcer500ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rfcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Rfcer500ApplicationJSON struct {
    Error *Rfcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer502ApplicationJSONErrorEnum string

const (
    Rfcer502ApplicationJSONErrorEnumBadGatewy Rfcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Rfcer502ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rfcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Rfcer502ApplicationJSON struct {
    Error *Rfcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer503ApplicationJSONErrorEnum string

const (
    Rfcer503ApplicationJSONErrorEnumServiceUnavailable Rfcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Rfcer503ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rfcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Rfcer503ApplicationJSON struct {
    Error *Rfcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rfcer504ApplicationJSONErrorEnum string

const (
    Rfcer504ApplicationJSONErrorEnumGatewayTimeout Rfcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Rfcer504ApplicationJSONErrorDescriptionEnum string

const (
    Rfcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rfcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Rfcer504ApplicationJSON struct {
    Error *Rfcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rfcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type RfcerResponse struct {
    ContentType string 
    StatusCode int64 
    Rfcer400ApplicationJSONObject *Rfcer400ApplicationJSON 
    Rfcer401ApplicationJSONObject *Rfcer401ApplicationJSON 
    Rfcer404ApplicationJSONObject *Rfcer404ApplicationJSON 
    Rfcer500ApplicationJSONObject *Rfcer500ApplicationJSON 
    Rfcer502ApplicationJSONObject *Rfcer502ApplicationJSON 
    Rfcer503ApplicationJSONObject *Rfcer503ApplicationJSON 
    Rfcer504ApplicationJSONObject *Rfcer504ApplicationJSON 
    
}

