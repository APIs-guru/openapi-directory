package shared

type FileCommentEntity struct {
	Body      *string                    `json:"body,omitempty"`
	ID        *int32                     `json:"id,omitempty"`
	Reactions *FileCommentReactionEntity `json:"reactions,omitempty"`
}
