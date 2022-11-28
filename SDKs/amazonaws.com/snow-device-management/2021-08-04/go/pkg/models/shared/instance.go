package shared

import (
	"time"
)

// Instance
// The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
type Instance struct {
	AmiLaunchIndex      *int64                       `json:"amiLaunchIndex,omitempty"`
	BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings,omitempty"`
	CPUOptions          *CPUOptions                  `json:"cpuOptions,omitempty"`
	CreatedAt           *time.Time                   `json:"createdAt,omitempty"`
	ImageID             *string                      `json:"imageId,omitempty"`
	InstanceID          *string                      `json:"instanceId,omitempty"`
	InstanceType        *string                      `json:"instanceType,omitempty"`
	PrivateIPAddress    *string                      `json:"privateIpAddress,omitempty"`
	PublicIPAddress     *string                      `json:"publicIpAddress,omitempty"`
	RootDeviceName      *string                      `json:"rootDeviceName,omitempty"`
	SecurityGroups      []SecurityGroupIdentifier    `json:"securityGroups,omitempty"`
	State               *InstanceState               `json:"state,omitempty"`
	UpdatedAt           *time.Time                   `json:"updatedAt,omitempty"`
}
