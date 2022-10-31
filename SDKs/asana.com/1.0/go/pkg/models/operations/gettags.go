package operations

import (
"openapi/pkg/models/shared")

type GetTagsQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type GetTagsRequest struct {
    QueryParams GetTagsQueryParams 
    
}

type GetTags200ApplicationJSON struct {
    Data []shared.TagCompact `json:"data,omitempty"`
    
}

type GetTagsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetTags200ApplicationJSONObject *GetTags200ApplicationJSON 
    
}

