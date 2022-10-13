package shared

type ListGroupMembersRequest struct {
	GroupID        string  `json:"GroupId"`
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
}
