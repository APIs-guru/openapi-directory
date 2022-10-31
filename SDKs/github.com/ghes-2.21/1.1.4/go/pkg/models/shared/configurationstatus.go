package shared



type ConfigurationStatusProgress struct {
    Key string `json:"key"`
    Status string `json:"status"`
    
}

type ConfigurationStatus struct {
    Progress []ConfigurationStatusProgress `json:"progress,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

