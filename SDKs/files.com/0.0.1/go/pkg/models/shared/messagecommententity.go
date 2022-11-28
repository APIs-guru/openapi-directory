package shared

// MessageCommentEntity
// List Message Comments
type MessageCommentEntity struct {
	Body      *string                       `json:"body,omitempty"`
	ID        *int32                        `json:"id,omitempty"`
	Reactions *MessageCommentReactionEntity `json:"reactions,omitempty"`
}
