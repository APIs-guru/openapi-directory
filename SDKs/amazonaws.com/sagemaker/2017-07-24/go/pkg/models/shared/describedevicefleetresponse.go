package shared

import (
	"time"
)

type DescribeDeviceFleetResponse struct {
	CreationTime     time.Time        `json:"CreationTime"`
	Description      *string          `json:"Description,omitempty"`
	DeviceFleetArn   string           `json:"DeviceFleetArn"`
	DeviceFleetName  string           `json:"DeviceFleetName"`
	IotRoleAlias     *string          `json:"IotRoleAlias,omitempty"`
	LastModifiedTime time.Time        `json:"LastModifiedTime"`
	OutputConfig     EdgeOutputConfig `json:"OutputConfig"`
	RoleArn          *string          `json:"RoleArn,omitempty"`
}
