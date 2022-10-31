package operations

import (
"openapi/pkg/models/shared")

type DeleteTagPathParams struct {
    TagGid string `pathParam:"style=simple,explode=false,name=tag_gid"`
    
}

type DeleteTagQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type DeleteTagRequest struct {
    PathParams DeleteTagPathParams 
    QueryParams DeleteTagQueryParams 
    
}

type DeleteTag200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type DeleteTagResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    DeleteTag200ApplicationJSONObject *DeleteTag200ApplicationJSON 
    
}

