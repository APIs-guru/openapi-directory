package shared

import (
	"time"
)

type DescribeDeviceFleetResponse struct {
	CreationTime     time.Time        `json:"CreationTime"`
	Description      *string          `json:"Description"`
	DeviceFleetArn   string           `json:"DeviceFleetArn"`
	DeviceFleetName  string           `json:"DeviceFleetName"`
	IotRoleAlias     *string          `json:"IotRoleAlias"`
	LastModifiedTime time.Time        `json:"LastModifiedTime"`
	OutputConfig     EdgeOutputConfig `json:"OutputConfig"`
	RoleArn          *string          `json:"RoleArn"`
}
