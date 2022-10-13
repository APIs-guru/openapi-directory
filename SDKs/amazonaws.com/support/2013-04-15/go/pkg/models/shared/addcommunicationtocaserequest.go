package shared

type AddCommunicationToCaseRequest struct {
	AttachmentSetID   *string  `json:"attachmentSetId"`
	CaseID            *string  `json:"caseId"`
	CcEmailAddresses  []string `json:"ccEmailAddresses"`
	CommunicationBody string   `json:"communicationBody"`
}
