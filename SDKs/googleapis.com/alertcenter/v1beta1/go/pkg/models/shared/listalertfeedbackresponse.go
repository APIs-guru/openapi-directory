package shared

// ListAlertFeedbackResponse
// Response message for an alert feedback listing request.
type ListAlertFeedbackResponse struct {
	Feedback []AlertFeedback `json:"feedback,omitempty"`
}
