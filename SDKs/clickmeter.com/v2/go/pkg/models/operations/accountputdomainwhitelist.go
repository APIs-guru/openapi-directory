package operations

import (
"openapi/pkg/models/shared")

type AccountPutDomainWhitelistRequests struct {
    APICoreDtoAccountingDomainWhitelistEntry *shared.APICoreDtoAccountingDomainWhitelistEntry `request:"mediaType=application/json"`
    APICoreDtoAccountingDomainWhitelistEntry1 *shared.APICoreDtoAccountingDomainWhitelistEntry `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoAccountingDomainWhitelistEntry2 *shared.APICoreDtoAccountingDomainWhitelistEntry `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AccountPutDomainWhitelistRequest struct {
    Request AccountPutDomainWhitelistRequests 
    
}

type AccountPutDomainWhitelistResponse struct {
    APICoreDtoAccountingDomainWhitelistEntry *shared.APICoreDtoAccountingDomainWhitelistEntry 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

