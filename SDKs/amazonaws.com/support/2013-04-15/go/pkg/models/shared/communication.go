package shared

// Communication
// A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
type Communication struct {
	AttachmentSet []AttachmentDetails `json:"attachmentSet,omitempty"`
	Body          *string             `json:"body,omitempty"`
	CaseID        *string             `json:"caseId,omitempty"`
	SubmittedBy   *string             `json:"submittedBy,omitempty"`
	TimeCreated   *string             `json:"timeCreated,omitempty"`
}
