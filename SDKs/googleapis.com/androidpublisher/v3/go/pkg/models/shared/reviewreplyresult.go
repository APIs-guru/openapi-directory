package shared

type ReviewReplyResult struct {
	LastEdited *Timestamp `json:"lastEdited"`
	ReplyText  *string    `json:"replyText"`
}
