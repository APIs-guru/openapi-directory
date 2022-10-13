package shared

import (
	"time"
)

type DescribeDeviceOutput struct {
	AssociatedWithJob         *string                    `json:"associatedWithJob"`
	DeviceCapacities          []Capacity                 `json:"deviceCapacities"`
	DeviceState               *UnlockStateEnum           `json:"deviceState"`
	DeviceType                *string                    `json:"deviceType"`
	LastReachedOutAt          *time.Time                 `json:"lastReachedOutAt"`
	LastUpdatedAt             *time.Time                 `json:"lastUpdatedAt"`
	ManagedDeviceArn          *string                    `json:"managedDeviceArn"`
	ManagedDeviceID           *string                    `json:"managedDeviceId"`
	PhysicalNetworkInterfaces []PhysicalNetworkInterface `json:"physicalNetworkInterfaces"`
	Software                  *SoftwareInformation       `json:"software"`
	Tags                      map[string]string          `json:"tags"`
}
