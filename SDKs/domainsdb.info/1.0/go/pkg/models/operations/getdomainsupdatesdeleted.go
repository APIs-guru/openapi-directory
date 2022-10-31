package operations

import (
"openapi/pkg/models/shared")

type GetDomainsUpdatesDeletedQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    Date *string `queryParam:"style=form,explode=true,name=date"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    
}

type GetDomainsUpdatesDeletedRequest struct {
    QueryParams GetDomainsUpdatesDeletedQueryParams 
    
}

type GetDomainsUpdatesDeletedResponse struct {
    ContentType string 
    SearchResults *shared.SearchResults 
    StatusCode int64 
    
}

