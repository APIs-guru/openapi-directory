package operations

import (
"openapi/pkg/models/shared")

type GetFormFieldSetsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFormFieldSetsIDRequest struct {
    PathParams GetFormFieldSetsIDPathParams 
    
}

type GetFormFieldSetsIDResponse struct {
    ContentType string 
    FormFieldSetEntity *shared.FormFieldSetEntity 
    StatusCode int64 
    
}

