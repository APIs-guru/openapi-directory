package shared

import (
"time")

type DescribeDeviceResponse struct {
    Description *string `json:"Description,omitempty"`
    DeviceArn *string `json:"DeviceArn,omitempty"`
    DeviceFleetName string `json:"DeviceFleetName"`
    DeviceName string `json:"DeviceName"`
    IotThingName *string `json:"IotThingName,omitempty"`
    LatestHeartbeat *time.Time `json:"LatestHeartbeat,omitempty"`
    MaxModels *int64 `json:"MaxModels,omitempty"`
    Models []EdgeModel `json:"Models,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    RegistrationTime time.Time `json:"RegistrationTime"`
    
}

