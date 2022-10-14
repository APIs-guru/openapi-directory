package shared

type ListMailboxExportJobsResponse struct {
	Jobs      []MailboxExportJob `json:"Jobs,omitempty"`
	NextToken *string            `json:"NextToken,omitempty"`
}
