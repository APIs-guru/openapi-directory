package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsAddOrUpdateProjectPermissionsLegacyPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumRead  TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "read"
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumWrite TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "write"
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumAdmin TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "admin"
)

type TeamsAddOrUpdateProjectPermissionsLegacyRequestBody struct {
	Permission *TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum `json:"permission,omitempty"`
}

type TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type TeamsAddOrUpdateProjectPermissionsLegacyRequest struct {
	PathParams TeamsAddOrUpdateProjectPermissionsLegacyPathParams
	Request    *TeamsAddOrUpdateProjectPermissionsLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateProjectPermissionsLegacyResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	BasicError                                                       *shared.BasicError
	TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject *TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON
	TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject *TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSON
	ValidationError                                                  *shared.ValidationError
}
