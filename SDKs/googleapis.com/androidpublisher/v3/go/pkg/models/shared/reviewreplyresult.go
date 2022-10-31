package shared



type ReviewReplyResult struct {
    LastEdited *Timestamp `json:"lastEdited,omitempty"`
    ReplyText *string `json:"replyText,omitempty"`
    
}

