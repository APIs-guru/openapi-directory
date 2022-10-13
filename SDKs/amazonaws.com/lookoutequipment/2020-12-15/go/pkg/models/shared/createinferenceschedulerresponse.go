package shared

type CreateInferenceSchedulerResponse struct {
	InferenceSchedulerArn  *string                       `json:"InferenceSchedulerArn"`
	InferenceSchedulerName *string                       `json:"InferenceSchedulerName"`
	Status                 *InferenceSchedulerStatusEnum `json:"Status"`
}
