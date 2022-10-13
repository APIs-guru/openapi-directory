package shared

type Communication struct {
	AttachmentSet []AttachmentDetails `json:"attachmentSet"`
	Body          *string             `json:"body"`
	CaseID        *string             `json:"caseId"`
	SubmittedBy   *string             `json:"submittedBy"`
	TimeCreated   *string             `json:"timeCreated"`
}
