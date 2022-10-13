package shared

type ListLensReviewImprovementsOutput struct {
	ImprovementSummaries []ImprovementSummary `json:"ImprovementSummaries"`
	LensAlias            *string              `json:"LensAlias"`
	MilestoneNumber      *int64               `json:"MilestoneNumber"`
	NextToken            *string              `json:"NextToken"`
	WorkloadID           *string              `json:"WorkloadId"`
}
