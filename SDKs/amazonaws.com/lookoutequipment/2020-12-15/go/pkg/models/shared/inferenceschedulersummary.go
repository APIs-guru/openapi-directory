package shared

type InferenceSchedulerSummary struct {
	DataDelayOffsetInMinutes *int64                        `json:"DataDelayOffsetInMinutes"`
	DataUploadFrequency      *DataUploadFrequencyEnum      `json:"DataUploadFrequency"`
	InferenceSchedulerArn    *string                       `json:"InferenceSchedulerArn"`
	InferenceSchedulerName   *string                       `json:"InferenceSchedulerName"`
	ModelArn                 *string                       `json:"ModelArn"`
	ModelName                *string                       `json:"ModelName"`
	Status                   *InferenceSchedulerStatusEnum `json:"Status"`
}
