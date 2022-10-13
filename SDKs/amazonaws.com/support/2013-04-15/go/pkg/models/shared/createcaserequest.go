package shared

type CreateCaseRequest struct {
	AttachmentSetID   *string  `json:"attachmentSetId"`
	CategoryCode      *string  `json:"categoryCode"`
	CcEmailAddresses  []string `json:"ccEmailAddresses"`
	CommunicationBody string   `json:"communicationBody"`
	IssueType         *string  `json:"issueType"`
	Language          *string  `json:"language"`
	ServiceCode       *string  `json:"serviceCode"`
	SeverityCode      *string  `json:"severityCode"`
	Subject           string   `json:"subject"`
}
