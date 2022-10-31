package operations

import (
"openapi/pkg/models/shared")

type UpdateEnumOptionPathParams struct {
    EnumOptionGid string `pathParam:"style=simple,explode=false,name=enum_option_gid"`
    
}

type UpdateEnumOptionQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateEnumOptionRequestBody struct {
    Data *shared.EnumOptionRequest `json:"data,omitempty"`
    
}

type UpdateEnumOptionRequest struct {
    PathParams UpdateEnumOptionPathParams 
    QueryParams UpdateEnumOptionQueryParams 
    Request *UpdateEnumOptionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateEnumOption200ApplicationJSON struct {
    Data *shared.EnumOption `json:"data,omitempty"`
    
}

type UpdateEnumOptionResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateEnumOption200ApplicationJSONObject *UpdateEnumOption200ApplicationJSON 
    
}

