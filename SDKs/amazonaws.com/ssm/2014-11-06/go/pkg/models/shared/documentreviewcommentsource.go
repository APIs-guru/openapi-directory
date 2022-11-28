package shared

// DocumentReviewCommentSource
// Information about comments added to a document review request.
type DocumentReviewCommentSource struct {
	Content *string                        `json:"Content,omitempty"`
	Type    *DocumentReviewCommentTypeEnum `json:"Type,omitempty"`
}
