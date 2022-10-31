package shared



type DeviceSummary struct {
    AssociatedWithJob *string `json:"associatedWithJob,omitempty"`
    ManagedDeviceArn *string `json:"managedDeviceArn,omitempty"`
    ManagedDeviceID *string `json:"managedDeviceId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

