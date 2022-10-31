package operations

import (
"openapi/pkg/models/shared")

type CollectionsAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    
}

type CollectionsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type CollectionsAllRequest struct {
    PathParams CollectionsAllPathParams 
    QueryParams CollectionsAllQueryParams 
    
}

type CollectionsAllResponse struct {
    ContentType string 
    GetCollectionsResponse *shared.GetCollectionsResponse 
    StatusCode int64 
    
}

