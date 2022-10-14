package shared

type MessageEntity struct {
	Body     *string               `json:"body,omitempty"`
	Comments *MessageCommentEntity `json:"comments,omitempty"`
	ID       *int32                `json:"id,omitempty"`
	Subject  *string               `json:"subject,omitempty"`
}
