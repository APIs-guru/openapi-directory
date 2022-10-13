package shared

type ListAnswersOutput struct {
	AnswerSummaries []AnswerSummary `json:"AnswerSummaries"`
	LensAlias       *string         `json:"LensAlias"`
	MilestoneNumber *int64          `json:"MilestoneNumber"`
	NextToken       *string         `json:"NextToken"`
	WorkloadID      *string         `json:"WorkloadId"`
}
