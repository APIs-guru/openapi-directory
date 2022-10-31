package operations

import (
"openapi/pkg/models/shared")

type AccountGetIPBlacklistQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type AccountGetIPBlacklistRequest struct {
    QueryParams AccountGetIPBlacklistQueryParams 
    
}

type AccountGetIPBlacklistResponse struct {
    APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry *shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry 
    ContentType string 
    StatusCode int64 
    
}

