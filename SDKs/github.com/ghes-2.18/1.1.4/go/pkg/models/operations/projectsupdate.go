package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsUpdatePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsUpdateRequestBodyOrganizationPermissionEnum string

const (
	ProjectsUpdateRequestBodyOrganizationPermissionEnumRead  ProjectsUpdateRequestBodyOrganizationPermissionEnum = "read"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumWrite ProjectsUpdateRequestBodyOrganizationPermissionEnum = "write"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumAdmin ProjectsUpdateRequestBodyOrganizationPermissionEnum = "admin"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumNone  ProjectsUpdateRequestBodyOrganizationPermissionEnum = "none"
)

type ProjectsUpdateRequestBody struct {
	Body                   *string                                              `json:"body"`
	Name                   *string                                              `json:"name"`
	OrganizationPermission *ProjectsUpdateRequestBodyOrganizationPermissionEnum `json:"organization_permission"`
	Private                *bool                                                `json:"private"`
	State                  *string                                              `json:"state"`
}

type ProjectsUpdateRequest struct {
	PathParams ProjectsUpdatePathParams
	Request    *ProjectsUpdateRequestBody `request:"mediaType=application/json"`
}

type ProjectsUpdate403ApplicationJSON struct {
	DocumentationURL *string  `json:"documentation_url"`
	Errors           []string `json:"errors"`
	Message          *string  `json:"message"`
}

type ProjectsUpdateResponse struct {
	ContentType                            string
	StatusCode                             int64
	BasicError                             *shared.BasicError
	Project                                *shared.Project
	ProjectsUpdate403ApplicationJSONObject *ProjectsUpdate403ApplicationJSON
	ValidationErrorSimple                  *shared.ValidationErrorSimple
}
