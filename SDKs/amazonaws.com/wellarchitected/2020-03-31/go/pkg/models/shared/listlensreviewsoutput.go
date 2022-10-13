package shared

type ListLensReviewsOutput struct {
	LensReviewSummaries []LensReviewSummary `json:"LensReviewSummaries"`
	MilestoneNumber     *int64              `json:"MilestoneNumber"`
	NextToken           *string             `json:"NextToken"`
	WorkloadID          *string             `json:"WorkloadId"`
}
