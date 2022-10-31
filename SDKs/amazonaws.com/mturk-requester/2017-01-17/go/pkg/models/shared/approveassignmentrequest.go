package shared

type ApproveAssignmentRequest struct {
	AssignmentID      string  `json:"AssignmentId"`
	OverrideRejection *bool   `json:"OverrideRejection,omitempty"`
	RequesterFeedback *string `json:"RequesterFeedback,omitempty"`
}
