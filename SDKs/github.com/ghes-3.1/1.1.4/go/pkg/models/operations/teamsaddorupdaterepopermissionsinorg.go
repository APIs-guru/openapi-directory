package operations

type TeamsAddOrUpdateRepoPermissionsInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnumPull     TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = "pull"
	TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnumPush     TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = "push"
	TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnumAdmin    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = "admin"
	TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnumMaintain TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = "maintain"
	TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnumTriage   TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = "triage"
)

type TeamsAddOrUpdateRepoPermissionsInOrgRequestBody struct {
	Permission *TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum `json:"permission"`
}

type TeamsAddOrUpdateRepoPermissionsInOrgRequest struct {
	PathParams TeamsAddOrUpdateRepoPermissionsInOrgPathParams
	Request    *TeamsAddOrUpdateRepoPermissionsInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateRepoPermissionsInOrgResponse struct {
	ContentType string
	StatusCode  int64
}
