package shared

import (
	"time"
)

// DeviceSummary
// Summary of the device.
type DeviceSummary struct {
	Description      *string            `json:"Description,omitempty"`
	DeviceArn        string             `json:"DeviceArn"`
	DeviceFleetName  *string            `json:"DeviceFleetName,omitempty"`
	DeviceName       string             `json:"DeviceName"`
	IotThingName     *string            `json:"IotThingName,omitempty"`
	LatestHeartbeat  *time.Time         `json:"LatestHeartbeat,omitempty"`
	Models           []EdgeModelSummary `json:"Models,omitempty"`
	RegistrationTime *time.Time         `json:"RegistrationTime,omitempty"`
}
