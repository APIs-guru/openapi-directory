package operations

import (
"openapi/pkg/models/shared")

type AccountDeleteDomainWhitelistPathParams struct {
    WhitelistID string `pathParam:"style=simple,explode=false,name=whitelistId"`
    
}

type AccountDeleteDomainWhitelistRequest struct {
    PathParams AccountDeleteDomainWhitelistPathParams 
    
}

type AccountDeleteDomainWhitelistResponse struct {
    APICoreDtoAccountingDomainWhitelistEntry *shared.APICoreDtoAccountingDomainWhitelistEntry 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

