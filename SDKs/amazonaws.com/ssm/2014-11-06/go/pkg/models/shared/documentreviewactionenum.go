package shared

type DocumentReviewActionEnum string

const (
	DocumentReviewActionEnumSendForReview DocumentReviewActionEnum = "SendForReview"
	DocumentReviewActionEnumUpdateReview  DocumentReviewActionEnum = "UpdateReview"
	DocumentReviewActionEnumApprove       DocumentReviewActionEnum = "Approve"
	DocumentReviewActionEnumReject        DocumentReviewActionEnum = "Reject"
)
