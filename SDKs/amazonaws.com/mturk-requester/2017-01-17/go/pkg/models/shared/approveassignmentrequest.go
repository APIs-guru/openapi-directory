package shared

type ApproveAssignmentRequest struct {
	AssignmentID      string  `json:"AssignmentId"`
	OverrideRejection *bool   `json:"OverrideRejection"`
	RequesterFeedback *string `json:"RequesterFeedback"`
}
