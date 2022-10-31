package shared



type ContainerServicePower struct {
    CPUCount *float32 `json:"cpuCount,omitempty"`
    IsActive *bool `json:"isActive,omitempty"`
    Name *string `json:"name,omitempty"`
    PowerID *string `json:"powerId,omitempty"`
    Price *float32 `json:"price,omitempty"`
    RAMSizeInGb *float32 `json:"ramSizeInGb,omitempty"`
    
}

