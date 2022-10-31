package operations

import (
"openapi/pkg/models/shared")

type AccountPutIPBlacklistRequests struct {
    APICoreDtoAccountingIPBlacklistEntry *shared.APICoreDtoAccountingIPBlacklistEntry `request:"mediaType=application/json"`
    APICoreDtoAccountingIPBlacklistEntry1 *shared.APICoreDtoAccountingIPBlacklistEntry `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoAccountingIPBlacklistEntry2 *shared.APICoreDtoAccountingIPBlacklistEntry `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AccountPutIPBlacklistRequest struct {
    Request AccountPutIPBlacklistRequests 
    
}

type AccountPutIPBlacklistResponse struct {
    APICoreDtoAccountingIPBlacklistEntry *shared.APICoreDtoAccountingIPBlacklistEntry 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

