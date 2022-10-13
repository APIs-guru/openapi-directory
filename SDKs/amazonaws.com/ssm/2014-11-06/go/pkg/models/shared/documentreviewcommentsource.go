package shared

type DocumentReviewCommentSource struct {
	Content *string                        `json:"Content"`
	Type    *DocumentReviewCommentTypeEnum `json:"Type"`
}
