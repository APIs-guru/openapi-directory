package shared



type ListPermissionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Permissions []ResourceSharePermissionSummary `json:"permissions,omitempty"`
    
}

