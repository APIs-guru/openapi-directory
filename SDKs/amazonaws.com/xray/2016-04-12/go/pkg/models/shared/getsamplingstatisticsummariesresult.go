package shared

type GetSamplingStatisticSummariesResult struct {
	NextToken                  *string                    `json:"NextToken"`
	SamplingStatisticSummaries []SamplingStatisticSummary `json:"SamplingStatisticSummaries"`
}
