package shared

type ListLensReviewImprovementsOutput struct {
	ImprovementSummaries []ImprovementSummary `json:"ImprovementSummaries,omitempty"`
	LensAlias            *string              `json:"LensAlias,omitempty"`
	MilestoneNumber      *int64               `json:"MilestoneNumber,omitempty"`
	NextToken            *string              `json:"NextToken,omitempty"`
	WorkloadID           *string              `json:"WorkloadId,omitempty"`
}
