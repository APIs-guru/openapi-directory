package shared

type StopInferenceSchedulerResponse struct {
	InferenceSchedulerArn  *string                       `json:"InferenceSchedulerArn"`
	InferenceSchedulerName *string                       `json:"InferenceSchedulerName"`
	ModelArn               *string                       `json:"ModelArn"`
	ModelName              *string                       `json:"ModelName"`
	Status                 *InferenceSchedulerStatusEnum `json:"Status"`
}
