package shared

type CreateBatchInferenceJobRequest struct {
	BatchInferenceJobConfig *BatchInferenceJobConfig `json:"batchInferenceJobConfig"`
	FilterArn               *string                  `json:"filterArn"`
	JobInput                BatchInferenceJobInput   `json:"jobInput"`
	JobName                 string                   `json:"jobName"`
	JobOutput               BatchInferenceJobOutput  `json:"jobOutput"`
	NumResults              *int64                   `json:"numResults"`
	RoleArn                 string                   `json:"roleArn"`
	SolutionVersionArn      string                   `json:"solutionVersionArn"`
}
