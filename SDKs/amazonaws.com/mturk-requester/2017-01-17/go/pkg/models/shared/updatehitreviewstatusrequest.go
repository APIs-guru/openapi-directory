package shared

type UpdateHitReviewStatusRequest struct {
	HitID  string `json:"HITId"`
	Revert *bool  `json:"Revert"`
}
