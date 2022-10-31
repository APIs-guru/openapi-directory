package shared



type DescribeDeviceRequest struct {
    DeviceFleetName string `json:"DeviceFleetName"`
    DeviceName string `json:"DeviceName"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

