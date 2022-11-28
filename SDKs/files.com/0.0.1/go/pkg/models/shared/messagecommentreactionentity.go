package shared

// MessageCommentReactionEntity
// List Message Comment Reactions
type MessageCommentReactionEntity struct {
	Emoji *string `json:"emoji,omitempty"`
	ID    *int32  `json:"id,omitempty"`
}
