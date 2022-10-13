package shared

type ListHyperParameterTuningJobsResponse struct {
	HyperParameterTuningJobSummaries []HyperParameterTuningJobSummary `json:"HyperParameterTuningJobSummaries"`
	NextToken                        *string                          `json:"NextToken"`
}
