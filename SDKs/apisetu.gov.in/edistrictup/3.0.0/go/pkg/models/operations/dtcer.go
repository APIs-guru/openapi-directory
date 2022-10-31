package operations

import (
"openapi/pkg/models/shared")

type DtcerRequestBodyCertificateParameters struct {
    ApplicationNo string `json:"ApplicationNo"`
    CertificateID string `json:"CertificateID"`
    
}


type DtcerRequestBodyFormatEnum string

const (
    DtcerRequestBodyFormatEnumPdf DtcerRequestBodyFormatEnum = "pdf"
)


type DtcerRequestBody struct {
    CertificateParameters *DtcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format DtcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type DtcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type DtcerRequest struct {
    Request *DtcerRequestBody `request:"mediaType=application/json"`
    Security DtcerSecurity 
    
}


type Dtcer400ApplicationJSONErrorEnum string

const (
    Dtcer400ApplicationJSONErrorEnumMissingParameter Dtcer400ApplicationJSONErrorEnum = "missing_parameter"
Dtcer400ApplicationJSONErrorEnumInvalidParameter Dtcer400ApplicationJSONErrorEnum = "invalid_parameter"
Dtcer400ApplicationJSONErrorEnumInvalidFormat Dtcer400ApplicationJSONErrorEnum = "invalid_format"
Dtcer400ApplicationJSONErrorEnumInvalidTxnid Dtcer400ApplicationJSONErrorEnum = "invalid_txnid"
Dtcer400ApplicationJSONErrorEnumInvalidConsentid Dtcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Dtcer400ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Dtcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Dtcer400ApplicationJSONErrorDescriptionEnumBadRequest Dtcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Dtcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Dtcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Dtcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Dtcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Dtcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dtcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Dtcer400ApplicationJSON struct {
    Error *Dtcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer401ApplicationJSONErrorEnum string

const (
    Dtcer401ApplicationJSONErrorEnumInvalidAuthentication Dtcer401ApplicationJSONErrorEnum = "invalid_authentication"
Dtcer401ApplicationJSONErrorEnumInvalidAuthorization Dtcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Dtcer401ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Dtcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Dtcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dtcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Dtcer401ApplicationJSON struct {
    Error *Dtcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer404ApplicationJSONErrorEnum string

const (
    Dtcer404ApplicationJSONErrorEnumRecordNotFound Dtcer404ApplicationJSONErrorEnum = "record_not_found"
Dtcer404ApplicationJSONErrorEnumURLNotFound Dtcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Dtcer404ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Dtcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Dtcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dtcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Dtcer404ApplicationJSON struct {
    Error *Dtcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer500ApplicationJSONErrorEnum string

const (
    Dtcer500ApplicationJSONErrorEnumInternalServerError Dtcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Dtcer500ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer500ApplicationJSONErrorDescriptionEnumInternalServerError Dtcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Dtcer500ApplicationJSON struct {
    Error *Dtcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer502ApplicationJSONErrorEnum string

const (
    Dtcer502ApplicationJSONErrorEnumBadGatewy Dtcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Dtcer502ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dtcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Dtcer502ApplicationJSON struct {
    Error *Dtcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer503ApplicationJSONErrorEnum string

const (
    Dtcer503ApplicationJSONErrorEnumServiceUnavailable Dtcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Dtcer503ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dtcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Dtcer503ApplicationJSON struct {
    Error *Dtcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dtcer504ApplicationJSONErrorEnum string

const (
    Dtcer504ApplicationJSONErrorEnumGatewayTimeout Dtcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Dtcer504ApplicationJSONErrorDescriptionEnum string

const (
    Dtcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dtcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Dtcer504ApplicationJSON struct {
    Error *Dtcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dtcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type DtcerResponse struct {
    ContentType string 
    StatusCode int64 
    Dtcer400ApplicationJSONObject *Dtcer400ApplicationJSON 
    Dtcer401ApplicationJSONObject *Dtcer401ApplicationJSON 
    Dtcer404ApplicationJSONObject *Dtcer404ApplicationJSON 
    Dtcer500ApplicationJSONObject *Dtcer500ApplicationJSON 
    Dtcer502ApplicationJSONObject *Dtcer502ApplicationJSON 
    Dtcer503ApplicationJSONObject *Dtcer503ApplicationJSON 
    Dtcer504ApplicationJSONObject *Dtcer504ApplicationJSON 
    
}

