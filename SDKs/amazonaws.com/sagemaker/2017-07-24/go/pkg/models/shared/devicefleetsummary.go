package shared

import (
	"time"
)

type DeviceFleetSummary struct {
	CreationTime     *time.Time `json:"CreationTime"`
	DeviceFleetArn   string     `json:"DeviceFleetArn"`
	DeviceFleetName  string     `json:"DeviceFleetName"`
	LastModifiedTime *time.Time `json:"LastModifiedTime"`
}
