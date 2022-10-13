package shared

type ListResourceDelegatesRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
	ResourceID     string  `json:"ResourceId"`
}
