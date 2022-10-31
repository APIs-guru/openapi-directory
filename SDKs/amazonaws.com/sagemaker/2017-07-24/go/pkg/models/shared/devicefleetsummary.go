package shared

import (
"time")

type DeviceFleetSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DeviceFleetArn string `json:"DeviceFleetArn"`
    DeviceFleetName string `json:"DeviceFleetName"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    
}

