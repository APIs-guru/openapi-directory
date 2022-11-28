package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsAddCollaboratorPathParams struct {
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
	Username  string `pathParam:"style=simple,explode=false,name=username"`
}

type ProjectsAddCollaboratorRequestBodyPermissionEnum string

const (
	ProjectsAddCollaboratorRequestBodyPermissionEnumRead  ProjectsAddCollaboratorRequestBodyPermissionEnum = "read"
	ProjectsAddCollaboratorRequestBodyPermissionEnumWrite ProjectsAddCollaboratorRequestBodyPermissionEnum = "write"
	ProjectsAddCollaboratorRequestBodyPermissionEnumAdmin ProjectsAddCollaboratorRequestBodyPermissionEnum = "admin"
)

type ProjectsAddCollaboratorRequestBody struct {
	Permission *ProjectsAddCollaboratorRequestBodyPermissionEnum `json:"permission,omitempty"`
}

type ProjectsAddCollaborator415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ProjectsAddCollaboratorRequest struct {
	PathParams ProjectsAddCollaboratorPathParams
	Request    *ProjectsAddCollaboratorRequestBody `request:"mediaType=application/json"`
}

type ProjectsAddCollaboratorResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	BasicError                                      *shared.BasicError
	ProjectsAddCollaborator415ApplicationJSONObject *ProjectsAddCollaborator415ApplicationJSON
	ValidationError                                 *shared.ValidationError
}
