package shared

type ListBatchInferenceJobsResponse struct {
	BatchInferenceJobs []BatchInferenceJobSummary `json:"batchInferenceJobs"`
	NextToken          *string                    `json:"nextToken"`
}
