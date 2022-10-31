package operations

import (
"openapi/pkg/models/shared")

type GetListingPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    AppendAPIKey *bool `queryParam:"style=form,explode=true,name=append_api_key"`
    IncludeRelevantLinks *bool `queryParam:"style=form,explode=true,name=include_relevant_links"`
    
}

type GetListingRequest struct {
    PathParams GetListingPathParams 
    QueryParams GetListingQueryParams 
    
}

type GetListingResponse struct {
    ContentType string 
    Error *shared.Error 
    Listing *shared.Listing 
    StatusCode int64 
    
}

