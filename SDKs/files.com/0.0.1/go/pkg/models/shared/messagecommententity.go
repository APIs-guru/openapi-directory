package shared

type MessageCommentEntity struct {
	Body      *string                       `json:"body"`
	ID        *int32                        `json:"id"`
	Reactions *MessageCommentReactionEntity `json:"reactions"`
}
