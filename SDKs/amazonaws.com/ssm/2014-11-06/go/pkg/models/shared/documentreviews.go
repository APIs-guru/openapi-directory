package shared

// DocumentReviews
// Information about a document approval review.
type DocumentReviews struct {
	Action  DocumentReviewActionEnum      `json:"Action"`
	Comment []DocumentReviewCommentSource `json:"Comment,omitempty"`
}
