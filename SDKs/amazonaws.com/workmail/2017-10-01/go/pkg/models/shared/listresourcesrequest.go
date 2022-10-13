package shared

type ListResourcesRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
}
