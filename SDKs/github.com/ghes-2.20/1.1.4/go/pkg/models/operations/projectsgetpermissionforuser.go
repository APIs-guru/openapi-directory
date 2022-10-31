package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsGetPermissionForUserPathParams struct {
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
	Username  string `pathParam:"style=simple,explode=false,name=username"`
}

type ProjectsGetPermissionForUserRequest struct {
	PathParams ProjectsGetPermissionForUserPathParams
}

type ProjectsGetPermissionForUser415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ProjectsGetPermissionForUserResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	BasicError                                           *shared.BasicError
	ProjectsGetPermissionForUser415ApplicationJSONObject *ProjectsGetPermissionForUser415ApplicationJSON
	RepositoryCollaboratorPermission                     *shared.RepositoryCollaboratorPermission
	ValidationError                                      *shared.ValidationError
}
