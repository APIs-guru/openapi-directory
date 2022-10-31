package shared



type AddCommunicationToCaseRequest struct {
    AttachmentSetID *string `json:"attachmentSetId,omitempty"`
    CaseID *string `json:"caseId,omitempty"`
    CcEmailAddresses []string `json:"ccEmailAddresses,omitempty"`
    CommunicationBody string `json:"communicationBody"`
    
}

