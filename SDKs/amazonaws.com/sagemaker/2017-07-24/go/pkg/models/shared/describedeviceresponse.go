package shared

import (
	"time"
)

type DescribeDeviceResponse struct {
	Description      *string     `json:"Description"`
	DeviceArn        *string     `json:"DeviceArn"`
	DeviceFleetName  string      `json:"DeviceFleetName"`
	DeviceName       string      `json:"DeviceName"`
	IotThingName     *string     `json:"IotThingName"`
	LatestHeartbeat  *time.Time  `json:"LatestHeartbeat"`
	MaxModels        *int64      `json:"MaxModels"`
	Models           []EdgeModel `json:"Models"`
	NextToken        *string     `json:"NextToken"`
	RegistrationTime time.Time   `json:"RegistrationTime"`
}
