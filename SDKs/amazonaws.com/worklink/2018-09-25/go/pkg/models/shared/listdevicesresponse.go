package shared



type ListDevicesResponse struct {
    Devices []DeviceSummary `json:"Devices,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

