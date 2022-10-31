package shared



type DeregisterDevicesRequest struct {
    DeviceFleetName string `json:"DeviceFleetName"`
    DeviceNames []string `json:"DeviceNames"`
    
}

