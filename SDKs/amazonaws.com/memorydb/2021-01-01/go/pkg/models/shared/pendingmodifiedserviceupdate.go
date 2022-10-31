package shared



type PendingModifiedServiceUpdate struct {
    ServiceUpdateName *string `json:"ServiceUpdateName,omitempty"`
    Status *ServiceUpdateStatusEnum `json:"Status,omitempty"`
    
}

