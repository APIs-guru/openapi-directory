package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsAddOrUpdateRepoPermissionsLegacyPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnumPull  TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum = "pull"
	TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnumPush  TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum = "push"
	TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnumAdmin TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum = "admin"
)

type TeamsAddOrUpdateRepoPermissionsLegacyRequestBody struct {
	Permission *TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum `json:"permission,omitempty"`
}

type TeamsAddOrUpdateRepoPermissionsLegacyRequest struct {
	PathParams TeamsAddOrUpdateRepoPermissionsLegacyPathParams
	Request    *TeamsAddOrUpdateRepoPermissionsLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateRepoPermissionsLegacyResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
