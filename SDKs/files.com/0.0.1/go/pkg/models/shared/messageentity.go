package shared

type MessageEntity struct {
	Body     *string               `json:"body"`
	Comments *MessageCommentEntity `json:"comments"`
	ID       *int32                `json:"id"`
	Subject  *string               `json:"subject"`
}
