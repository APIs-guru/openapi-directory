package operations

import (
"openapi/pkg/models/shared")

type UpdateTagPathParams struct {
    TagGid string `pathParam:"style=simple,explode=false,name=tag_gid"`
    
}

type UpdateTagQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateTagRequest struct {
    PathParams UpdateTagPathParams 
    QueryParams UpdateTagQueryParams 
    
}

type UpdateTag200ApplicationJSON struct {
    Data *shared.TagResponse `json:"data,omitempty"`
    
}

type UpdateTagResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateTag200ApplicationJSONObject *UpdateTag200ApplicationJSON 
    
}

