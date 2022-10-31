package operations

import (
"openapi/pkg/models/shared")

type CreateCustomFieldQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateCustomFieldRequestBody struct {
    Data *shared.CustomFieldRequest `json:"data,omitempty"`
    
}

type CreateCustomFieldRequest struct {
    QueryParams CreateCustomFieldQueryParams 
    Request *CreateCustomFieldRequestBody `request:"mediaType=application/json"`
    
}

type CreateCustomField201ApplicationJSON struct {
    Data *shared.CustomFieldResponse `json:"data,omitempty"`
    
}

type CreateCustomFieldResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateCustomField201ApplicationJSONObject *CreateCustomField201ApplicationJSON 
    
}

