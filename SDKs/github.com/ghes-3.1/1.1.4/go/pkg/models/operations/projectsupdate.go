package operations

import (
"openapi/pkg/models/shared")

type ProjectsUpdatePathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
    
}


type ProjectsUpdateRequestBodyOrganizationPermissionEnum string

const (
    ProjectsUpdateRequestBodyOrganizationPermissionEnumRead ProjectsUpdateRequestBodyOrganizationPermissionEnum = "read"
ProjectsUpdateRequestBodyOrganizationPermissionEnumWrite ProjectsUpdateRequestBodyOrganizationPermissionEnum = "write"
ProjectsUpdateRequestBodyOrganizationPermissionEnumAdmin ProjectsUpdateRequestBodyOrganizationPermissionEnum = "admin"
ProjectsUpdateRequestBodyOrganizationPermissionEnumNone ProjectsUpdateRequestBodyOrganizationPermissionEnum = "none"
)


type ProjectsUpdateRequestBody struct {
    Body *string `json:"body,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationPermission *ProjectsUpdateRequestBodyOrganizationPermissionEnum `json:"organization_permission,omitempty"`
    Private *bool `json:"private,omitempty"`
    State *string `json:"state,omitempty"`
    
}

type ProjectsUpdateRequest struct {
    PathParams ProjectsUpdatePathParams 
    Request *ProjectsUpdateRequestBody `request:"mediaType=application/json"`
    
}

type ProjectsUpdate403ApplicationJSON struct {
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Errors []string `json:"errors,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ProjectsUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Project *shared.Project 
    ProjectsUpdate403ApplicationJSONObject *ProjectsUpdate403ApplicationJSON 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

