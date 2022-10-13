package shared

type PullRequestReviewRequest struct {
	Teams []TeamSimple `json:"teams"`
	Users []SimpleUser `json:"users"`
}
