package shared

import (
	"time"
)

type DeviceSummary struct {
	Description      *string            `json:"Description"`
	DeviceArn        string             `json:"DeviceArn"`
	DeviceFleetName  *string            `json:"DeviceFleetName"`
	DeviceName       string             `json:"DeviceName"`
	IotThingName     *string            `json:"IotThingName"`
	LatestHeartbeat  *time.Time         `json:"LatestHeartbeat"`
	Models           []EdgeModelSummary `json:"Models"`
	RegistrationTime *time.Time         `json:"RegistrationTime"`
}
