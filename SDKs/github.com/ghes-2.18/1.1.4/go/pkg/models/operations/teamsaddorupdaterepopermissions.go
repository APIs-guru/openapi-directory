package operations

type TeamsAddOrUpdateRepoPermissionsPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnumPull  TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum = "pull"
	TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnumPush  TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum = "push"
	TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnumAdmin TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum = "admin"
)

type TeamsAddOrUpdateRepoPermissionsRequestBody struct {
	Permission *TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum `json:"permission"`
}

type TeamsAddOrUpdateRepoPermissionsRequest struct {
	PathParams TeamsAddOrUpdateRepoPermissionsPathParams
	Request    *TeamsAddOrUpdateRepoPermissionsRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateRepoPermissionsResponse struct {
	ContentType string
	StatusCode  int64
}
