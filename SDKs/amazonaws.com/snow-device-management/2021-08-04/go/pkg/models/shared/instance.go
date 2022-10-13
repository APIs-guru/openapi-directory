package shared

import (
	"time"
)

type Instance struct {
	AmiLaunchIndex      *int64                       `json:"amiLaunchIndex"`
	BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings"`
	CPUOptions          *CPUOptions                  `json:"cpuOptions"`
	CreatedAt           *time.Time                   `json:"createdAt"`
	ImageID             *string                      `json:"imageId"`
	InstanceID          *string                      `json:"instanceId"`
	InstanceType        *string                      `json:"instanceType"`
	PrivateIPAddress    *string                      `json:"privateIpAddress"`
	PublicIPAddress     *string                      `json:"publicIpAddress"`
	RootDeviceName      *string                      `json:"rootDeviceName"`
	SecurityGroups      []SecurityGroupIdentifier    `json:"securityGroups"`
	State               *InstanceState               `json:"state"`
	UpdatedAt           *time.Time                   `json:"updatedAt"`
}
