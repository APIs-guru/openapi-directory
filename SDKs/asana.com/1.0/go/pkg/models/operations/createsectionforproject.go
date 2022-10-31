package operations

import (
"openapi/pkg/models/shared")

type CreateSectionForProjectPathParams struct {
    ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
    
}

type CreateSectionForProjectQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateSectionForProjectRequestBody struct {
    Data *shared.SectionRequest `json:"data,omitempty"`
    
}

type CreateSectionForProjectRequest struct {
    PathParams CreateSectionForProjectPathParams 
    QueryParams CreateSectionForProjectQueryParams 
    Request CreateSectionForProjectRequestBody `request:"mediaType=application/json"`
    
}

type CreateSectionForProject201ApplicationJSON struct {
    Data *shared.SectionResponse `json:"data,omitempty"`
    
}

type CreateSectionForProjectResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateSectionForProject201ApplicationJSONObject *CreateSectionForProject201ApplicationJSON 
    
}

