package shared

type ListResourcesRequest struct {
	MaxResults     *int64  `json:"MaxResults,omitempty"`
	NextToken      *string `json:"NextToken,omitempty"`
	OrganizationID string  `json:"OrganizationId"`
}
