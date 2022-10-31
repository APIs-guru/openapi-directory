package shared



type CreateBatchInferenceJobRequest struct {
    BatchInferenceJobConfig *BatchInferenceJobConfig `json:"batchInferenceJobConfig,omitempty"`
    FilterArn *string `json:"filterArn,omitempty"`
    JobInput BatchInferenceJobInput `json:"jobInput"`
    JobName string `json:"jobName"`
    JobOutput BatchInferenceJobOutput `json:"jobOutput"`
    NumResults *int64 `json:"numResults,omitempty"`
    RoleArn string `json:"roleArn"`
    SolutionVersionArn string `json:"solutionVersionArn"`
    
}

