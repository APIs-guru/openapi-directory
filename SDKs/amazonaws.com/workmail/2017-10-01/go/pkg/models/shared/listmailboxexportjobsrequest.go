package shared

type ListMailboxExportJobsRequest struct {
	MaxResults     *int64  `json:"MaxResults,omitempty"`
	NextToken      *string `json:"NextToken,omitempty"`
	OrganizationID string  `json:"OrganizationId"`
}
