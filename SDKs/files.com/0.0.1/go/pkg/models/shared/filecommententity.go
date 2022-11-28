package shared

// FileCommentEntity
// List File Comments by path
type FileCommentEntity struct {
	Body      *string                    `json:"body,omitempty"`
	ID        *int32                     `json:"id,omitempty"`
	Reactions *FileCommentReactionEntity `json:"reactions,omitempty"`
}
