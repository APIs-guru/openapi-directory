package shared

import (
"time")

type DescribeDeviceOutput struct {
    AssociatedWithJob *string `json:"associatedWithJob,omitempty"`
    DeviceCapacities []Capacity `json:"deviceCapacities,omitempty"`
    DeviceState *UnlockStateEnum `json:"deviceState,omitempty"`
    DeviceType *string `json:"deviceType,omitempty"`
    LastReachedOutAt *time.Time `json:"lastReachedOutAt,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    ManagedDeviceArn *string `json:"managedDeviceArn,omitempty"`
    ManagedDeviceID *string `json:"managedDeviceId,omitempty"`
    PhysicalNetworkInterfaces []PhysicalNetworkInterface `json:"physicalNetworkInterfaces,omitempty"`
    Software *SoftwareInformation `json:"software,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

