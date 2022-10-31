package operations

import (
"openapi/pkg/models/shared")

type ProjectsCreateCardPathParams struct {
    ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
    
}

type ProjectsCreateCardRequestBody1 struct {
    Note string `json:"note"`
    
}

type ProjectsCreateCardRequestBody2 struct {
    ContentID int64 `json:"content_id"`
    ContentType string `json:"content_type"`
    
}

type ProjectsCreateCardRequest struct {
    PathParams ProjectsCreateCardPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ProjectsCreateCard503ApplicationJSONErrors struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ProjectsCreateCard503ApplicationJSON struct {
    Code *string `json:"code,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Errors []ProjectsCreateCard503ApplicationJSONErrors `json:"errors,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ProjectsCreateCardResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectCard *shared.ProjectCard 
    ProjectsCreateCard422ApplicationJSONOneOf *interface{} 
    ProjectsCreateCard503ApplicationJSONObject *ProjectsCreateCard503ApplicationJSON 
    
}

