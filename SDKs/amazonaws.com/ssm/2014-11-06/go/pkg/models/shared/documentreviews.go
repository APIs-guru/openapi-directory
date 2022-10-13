package shared

type DocumentReviews struct {
	Action  DocumentReviewActionEnum      `json:"Action"`
	Comment []DocumentReviewCommentSource `json:"Comment"`
}
