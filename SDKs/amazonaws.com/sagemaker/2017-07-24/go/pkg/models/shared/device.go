package shared



type Device struct {
    Description *string `json:"Description,omitempty"`
    DeviceName string `json:"DeviceName"`
    IotThingName *string `json:"IotThingName,omitempty"`
    
}

