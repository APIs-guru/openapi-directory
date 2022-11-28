package shared

// ListLensReviewsOutput
// Output of a list lens reviews call.
type ListLensReviewsOutput struct {
	LensReviewSummaries []LensReviewSummary `json:"LensReviewSummaries,omitempty"`
	MilestoneNumber     *int64              `json:"MilestoneNumber,omitempty"`
	NextToken           *string             `json:"NextToken,omitempty"`
	WorkloadID          *string             `json:"WorkloadId,omitempty"`
}
