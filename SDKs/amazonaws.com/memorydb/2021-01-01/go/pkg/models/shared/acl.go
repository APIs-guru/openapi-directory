package shared



type ACL struct {
    Arn *string `json:"ARN,omitempty"`
    Clusters []string `json:"Clusters,omitempty"`
    MinimumEngineVersion *string `json:"MinimumEngineVersion,omitempty"`
    Name *string `json:"Name,omitempty"`
    PendingChanges *ACLPendingChanges `json:"PendingChanges,omitempty"`
    Status *string `json:"Status,omitempty"`
    UserNames []string `json:"UserNames,omitempty"`
    
}

