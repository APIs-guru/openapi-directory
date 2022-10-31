package shared



type RegisterDevicesRequest struct {
    DeviceFleetName string `json:"DeviceFleetName"`
    Devices []Device `json:"Devices"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

