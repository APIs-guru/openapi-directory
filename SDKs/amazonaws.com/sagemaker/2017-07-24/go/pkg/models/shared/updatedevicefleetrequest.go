package shared

type UpdateDeviceFleetRequest struct {
	Description        *string          `json:"Description"`
	DeviceFleetName    string           `json:"DeviceFleetName"`
	EnableIotRoleAlias *bool            `json:"EnableIotRoleAlias"`
	OutputConfig       EdgeOutputConfig `json:"OutputConfig"`
	RoleArn            *string          `json:"RoleArn"`
}
