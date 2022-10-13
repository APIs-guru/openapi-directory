package shared

type CommentsSortEnum string

const (
	CommentsSortEnumMinusCreatedAt    CommentsSortEnum = "-createdAt"
	CommentsSortEnumMinusTotalReplies CommentsSortEnum = "-totalReplies"
)
