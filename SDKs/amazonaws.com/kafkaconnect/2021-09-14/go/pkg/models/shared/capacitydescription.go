package shared



type CapacityDescription struct {
    AutoScaling *AutoScalingDescription `json:"autoScaling,omitempty"`
    ProvisionedCapacity *ProvisionedCapacityDescription `json:"provisionedCapacity,omitempty"`
    
}

