package operations

import (
"openapi/pkg/models/shared")

type GetGroupByIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
    GroupPathAlias *string `queryParam:"style=form,explode=true,name=group_path_alias"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetGroupByIDRequest struct {
    QueryParams GetGroupByIDQueryParams 
    
}

type GetGroupByID200ApplicationJSON struct {
    Group *shared.Group `json:"group,omitempty"`
    Stat *string `json:"stat,omitempty"`
    
}

type GetGroupByIDResponse struct {
    ContentType string 
    StatusCode int64 
    GetGroupByID200ApplicationJSONObject *GetGroupByID200ApplicationJSON 
    
}

