package shared



type InstanceEntry struct {
    AvailabilityZone string `json:"availabilityZone"`
    InstanceType string `json:"instanceType"`
    PortInfoSource PortInfoSourceTypeEnum `json:"portInfoSource"`
    SourceName string `json:"sourceName"`
    UserData *string `json:"userData,omitempty"`
    
}

