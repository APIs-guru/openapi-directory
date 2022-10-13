package shared

type ListUsersRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
}
