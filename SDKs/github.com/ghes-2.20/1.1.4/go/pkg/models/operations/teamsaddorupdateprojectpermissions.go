package operations

type TeamsAddOrUpdateProjectPermissionsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsAddOrUpdateProjectPermissionsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnumRead  TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = "read"
	TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnumWrite TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = "write"
	TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnumAdmin TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = "admin"
)

type TeamsAddOrUpdateProjectPermissionsRequestBody struct {
	Permission *TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum `json:"permission,omitempty"`
}

type TeamsAddOrUpdateProjectPermissions403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type TeamsAddOrUpdateProjectPermissionsRequest struct {
	PathParams TeamsAddOrUpdateProjectPermissionsPathParams
	Headers    TeamsAddOrUpdateProjectPermissionsHeaders
	Request    *TeamsAddOrUpdateProjectPermissionsRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateProjectPermissionsResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	TeamsAddOrUpdateProjectPermissions403ApplicationJSONObject *TeamsAddOrUpdateProjectPermissions403ApplicationJSON
}
