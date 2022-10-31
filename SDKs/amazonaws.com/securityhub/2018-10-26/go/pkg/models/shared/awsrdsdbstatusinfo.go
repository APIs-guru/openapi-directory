package shared



type AwsRdsDbStatusInfo struct {
    Message *string `json:"Message,omitempty"`
    Normal *bool `json:"Normal,omitempty"`
    Status *string `json:"Status,omitempty"`
    StatusType *string `json:"StatusType,omitempty"`
    
}

