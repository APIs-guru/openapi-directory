package shared

// ReviewsReplyRequest
// Request to reply to review or update existing reply.
type ReviewsReplyRequest struct {
	ReplyText *string `json:"replyText,omitempty"`
}
