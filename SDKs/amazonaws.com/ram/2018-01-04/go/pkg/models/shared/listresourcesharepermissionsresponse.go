package shared



type ListResourceSharePermissionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Permissions []ResourceSharePermissionSummary `json:"permissions,omitempty"`
    
}

