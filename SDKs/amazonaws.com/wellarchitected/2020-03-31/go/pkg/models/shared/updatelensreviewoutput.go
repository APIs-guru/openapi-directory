package shared

// UpdateLensReviewOutput
// Output of a update lens review call.
type UpdateLensReviewOutput struct {
	LensReview *LensReview `json:"LensReview,omitempty"`
	WorkloadID *string     `json:"WorkloadId,omitempty"`
}
