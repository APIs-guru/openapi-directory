package shared

type ListMailboxExportJobsRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
}
