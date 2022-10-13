package shared

type UpdateLensReviewOutput struct {
	LensReview *LensReview `json:"LensReview"`
	WorkloadID *string     `json:"WorkloadId"`
}
