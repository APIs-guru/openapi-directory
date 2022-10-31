package operations

import (
"openapi/pkg/models/shared")

type ProjectsCreateForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ProjectsCreateForOrgRequestBody struct {
    Body *string `json:"body,omitempty"`
    Name string `json:"name"`
    
}

type ProjectsCreateForOrgRequest struct {
    PathParams ProjectsCreateForOrgPathParams 
    Request *ProjectsCreateForOrgRequestBody `request:"mediaType=application/json"`
    
}

type ProjectsCreateForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Project *shared.Project 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

