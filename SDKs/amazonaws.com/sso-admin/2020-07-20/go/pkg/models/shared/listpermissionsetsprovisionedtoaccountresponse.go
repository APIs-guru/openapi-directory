package shared



type ListPermissionSetsProvisionedToAccountResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PermissionSets []string `json:"PermissionSets,omitempty"`
    
}

