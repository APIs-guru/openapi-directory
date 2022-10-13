package shared

type IssueEventDismissedReview struct {
	DismissalCommitID *string `json:"dismissal_commit_id"`
	DismissalMessage  string  `json:"dismissal_message"`
	ReviewID          int64   `json:"review_id"`
	State             string  `json:"state"`
}
