package shared



type ListGroupMembersRequest struct {
    GroupID string `json:"GroupId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationID string `json:"OrganizationId"`
    
}

