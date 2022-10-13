package operations

type TeamsAddOrUpdateProjectPermissionsInOrgPathParams struct {
	Org       string `pathParam:"style=simple,explode=false,name=org"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
	TeamSlug  string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnumRead  TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum = "read"
	TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnumWrite TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum = "write"
	TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnumAdmin TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum = "admin"
)

type TeamsAddOrUpdateProjectPermissionsInOrgRequestBody struct {
	Permission *TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum `json:"permission"`
}

type TeamsAddOrUpdateProjectPermissionsInOrgRequest struct {
	PathParams TeamsAddOrUpdateProjectPermissionsInOrgPathParams
	Request    *TeamsAddOrUpdateProjectPermissionsInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type TeamsAddOrUpdateProjectPermissionsInOrgResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSONObject *TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON
}
