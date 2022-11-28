package shared

// FileCommentReactionEntity
// Create File Comment Reaction
type FileCommentReactionEntity struct {
	Emoji *string `json:"emoji,omitempty"`
	ID    *int32  `json:"id,omitempty"`
}
