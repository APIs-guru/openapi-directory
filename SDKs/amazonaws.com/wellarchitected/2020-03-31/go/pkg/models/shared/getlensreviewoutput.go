package shared

type GetLensReviewOutput struct {
	LensReview      *LensReview `json:"LensReview"`
	MilestoneNumber *int64      `json:"MilestoneNumber"`
	WorkloadID      *string     `json:"WorkloadId"`
}
