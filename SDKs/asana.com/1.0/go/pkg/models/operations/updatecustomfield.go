package operations

import (
"openapi/pkg/models/shared")

type UpdateCustomFieldPathParams struct {
    CustomFieldGid string `pathParam:"style=simple,explode=false,name=custom_field_gid"`
    
}

type UpdateCustomFieldQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateCustomFieldRequestBody struct {
    Data *shared.CustomFieldRequest `json:"data,omitempty"`
    
}

type UpdateCustomFieldRequest struct {
    PathParams UpdateCustomFieldPathParams 
    QueryParams UpdateCustomFieldQueryParams 
    Request *UpdateCustomFieldRequestBody `request:"mediaType=application/json"`
    
}

type UpdateCustomField200ApplicationJSON struct {
    Data *shared.CustomFieldResponse `json:"data,omitempty"`
    
}

type UpdateCustomFieldResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateCustomField200ApplicationJSONObject *UpdateCustomField200ApplicationJSON 
    
}

