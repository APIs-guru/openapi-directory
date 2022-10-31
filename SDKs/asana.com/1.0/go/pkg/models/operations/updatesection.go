package operations

import (
"openapi/pkg/models/shared")

type UpdateSectionPathParams struct {
    SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
    
}

type UpdateSectionQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateSectionRequestBody struct {
    Data *shared.SectionRequest `json:"data,omitempty"`
    
}

type UpdateSectionRequest struct {
    PathParams UpdateSectionPathParams 
    QueryParams UpdateSectionQueryParams 
    Request UpdateSectionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateSection200ApplicationJSON struct {
    Data *shared.SectionResponse `json:"data,omitempty"`
    
}

type UpdateSectionResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateSection200ApplicationJSONObject *UpdateSection200ApplicationJSON 
    
}

