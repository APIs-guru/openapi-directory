package shared



type Communication struct {
    AttachmentSet []AttachmentDetails `json:"attachmentSet,omitempty"`
    Body *string `json:"body,omitempty"`
    CaseID *string `json:"caseId,omitempty"`
    SubmittedBy *string `json:"submittedBy,omitempty"`
    TimeCreated *string `json:"timeCreated,omitempty"`
    
}

