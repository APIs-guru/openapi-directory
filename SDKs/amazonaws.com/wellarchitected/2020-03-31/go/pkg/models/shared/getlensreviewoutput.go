package shared



type GetLensReviewOutput struct {
    LensReview *LensReview `json:"LensReview,omitempty"`
    MilestoneNumber *int64 `json:"MilestoneNumber,omitempty"`
    WorkloadID *string `json:"WorkloadId,omitempty"`
    
}

