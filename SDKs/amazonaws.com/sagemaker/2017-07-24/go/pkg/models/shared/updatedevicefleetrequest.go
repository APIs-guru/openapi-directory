package shared

type UpdateDeviceFleetRequest struct {
	Description        *string          `json:"Description,omitempty"`
	DeviceFleetName    string           `json:"DeviceFleetName"`
	EnableIotRoleAlias *bool            `json:"EnableIotRoleAlias,omitempty"`
	OutputConfig       EdgeOutputConfig `json:"OutputConfig"`
	RoleArn            *string          `json:"RoleArn,omitempty"`
}
