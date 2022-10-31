package shared



type InstanceHealthSummary struct {
    InstanceHealth *InstanceHealthStateEnum `json:"instanceHealth,omitempty"`
    InstanceHealthReason *InstanceHealthReasonEnum `json:"instanceHealthReason,omitempty"`
    InstanceName *string `json:"instanceName,omitempty"`
    
}

