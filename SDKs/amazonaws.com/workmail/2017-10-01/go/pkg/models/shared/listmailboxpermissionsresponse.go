package shared



type ListMailboxPermissionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Permissions []Permission `json:"Permissions,omitempty"`
    
}

