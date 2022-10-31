package shared



type ListDevicesOutput struct {
    Devices []DeviceSummary `json:"devices,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

