package shared

// ReviewReplyResult
// The result of replying/updating a reply to review.
type ReviewReplyResult struct {
	LastEdited *Timestamp `json:"lastEdited,omitempty"`
	ReplyText  *string    `json:"replyText,omitempty"`
}
