package shared

type FileCommentEntity struct {
	Body      *string                    `json:"body"`
	ID        *int32                     `json:"id"`
	Reactions *FileCommentReactionEntity `json:"reactions"`
}
