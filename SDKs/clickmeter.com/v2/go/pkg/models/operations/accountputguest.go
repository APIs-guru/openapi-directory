package operations

import (
"openapi/pkg/models/shared")

type AccountPutGuestRequests struct {
    APICoreDtoAccountingGuest *shared.APICoreDtoAccountingGuest `request:"mediaType=application/json"`
    APICoreDtoAccountingGuest1 *shared.APICoreDtoAccountingGuest `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoAccountingGuest2 *shared.APICoreDtoAccountingGuest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AccountPutGuestRequest struct {
    Request AccountPutGuestRequests 
    
}

type AccountPutGuestResponse struct {
    APICoreDtoAccountingGuest *shared.APICoreDtoAccountingGuest 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

