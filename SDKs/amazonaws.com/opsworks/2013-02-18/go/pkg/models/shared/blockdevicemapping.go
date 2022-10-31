package shared



type BlockDeviceMapping struct {
    DeviceName *string `json:"DeviceName,omitempty"`
    Ebs *EbsBlockDevice `json:"Ebs,omitempty"`
    NoDevice *string `json:"NoDevice,omitempty"`
    VirtualName *string `json:"VirtualName,omitempty"`
    
}

