package shared



type ListMailboxPermissionsRequest struct {
    EntityID string `json:"EntityId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationID string `json:"OrganizationId"`
    
}

