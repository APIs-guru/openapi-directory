package shared



type ProvisioningConfig struct {
    Instances []InstanceConfig `json:"instances,omitempty"`
    Networks []NetworkConfig `json:"networks,omitempty"`
    TicketID *string `json:"ticketId,omitempty"`
    Volumes []VolumeConfig `json:"volumes,omitempty"`
    
}

