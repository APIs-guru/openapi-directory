package shared

type CreateCaseRequest struct {
	AttachmentSetID   *string  `json:"attachmentSetId,omitempty"`
	CategoryCode      *string  `json:"categoryCode,omitempty"`
	CcEmailAddresses  []string `json:"ccEmailAddresses,omitempty"`
	CommunicationBody string   `json:"communicationBody"`
	IssueType         *string  `json:"issueType,omitempty"`
	Language          *string  `json:"language,omitempty"`
	ServiceCode       *string  `json:"serviceCode,omitempty"`
	SeverityCode      *string  `json:"severityCode,omitempty"`
	Subject           string   `json:"subject"`
}
