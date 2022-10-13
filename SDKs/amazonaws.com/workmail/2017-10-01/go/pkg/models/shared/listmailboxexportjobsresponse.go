package shared

type ListMailboxExportJobsResponse struct {
	Jobs      []MailboxExportJob `json:"Jobs"`
	NextToken *string            `json:"NextToken"`
}
