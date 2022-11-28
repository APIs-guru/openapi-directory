package shared

// PullRequestReviewRequest
// Pull Request Review Request
type PullRequestReviewRequest struct {
	Teams []TeamSimple `json:"teams"`
	Users []SimpleUser `json:"users"`
}
