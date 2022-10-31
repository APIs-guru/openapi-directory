package shared



type DeviceGroup struct {
    DeviceSelectors []DeviceSelector `json:"deviceSelectors,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

