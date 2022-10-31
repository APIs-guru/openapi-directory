package shared



type User struct {
    ACLNames []string `json:"ACLNames,omitempty"`
    Arn *string `json:"ARN,omitempty"`
    AccessString *string `json:"AccessString,omitempty"`
    Authentication *Authentication `json:"Authentication,omitempty"`
    MinimumEngineVersion *string `json:"MinimumEngineVersion,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

