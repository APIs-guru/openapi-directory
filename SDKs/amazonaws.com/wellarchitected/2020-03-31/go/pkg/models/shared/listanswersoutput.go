package shared

// ListAnswersOutput
// Output of a list answers call.
type ListAnswersOutput struct {
	AnswerSummaries []AnswerSummary `json:"AnswerSummaries,omitempty"`
	LensAlias       *string         `json:"LensAlias,omitempty"`
	MilestoneNumber *int64          `json:"MilestoneNumber,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	WorkloadID      *string         `json:"WorkloadId,omitempty"`
}
