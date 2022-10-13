package shared

type CreateDeviceFleetRequest struct {
	Description        *string          `json:"Description"`
	DeviceFleetName    string           `json:"DeviceFleetName"`
	EnableIotRoleAlias *bool            `json:"EnableIotRoleAlias"`
	OutputConfig       EdgeOutputConfig `json:"OutputConfig"`
	RoleArn            *string          `json:"RoleArn"`
	Tags               []Tag            `json:"Tags"`
}
