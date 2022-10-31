package operations

import (
"openapi/pkg/models/shared")


type AccountGetGuestsSortDirectionEnum string

const (
    AccountGetGuestsSortDirectionEnumAsc AccountGetGuestsSortDirectionEnum = "asc"
AccountGetGuestsSortDirectionEnumDesc AccountGetGuestsSortDirectionEnum = "desc"
)


type AccountGetGuestsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortDirection *AccountGetGuestsSortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    
}

type AccountGetGuestsRequest struct {
    QueryParams AccountGetGuestsQueryParams 
    
}

type AccountGetGuestsResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

