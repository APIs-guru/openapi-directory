package shared

type ListLensReviewsOutput struct {
	LensReviewSummaries []LensReviewSummary `json:"LensReviewSummaries,omitempty"`
	MilestoneNumber     *int64              `json:"MilestoneNumber,omitempty"`
	NextToken           *string             `json:"NextToken,omitempty"`
	WorkloadID          *string             `json:"WorkloadId,omitempty"`
}
