package shared

type UpdateInferenceSchedulerRequest struct {
	DataDelayOffsetInMinutes *int64                        `json:"DataDelayOffsetInMinutes"`
	DataInputConfiguration   *InferenceInputConfiguration  `json:"DataInputConfiguration"`
	DataOutputConfiguration  *InferenceOutputConfiguration `json:"DataOutputConfiguration"`
	DataUploadFrequency      *DataUploadFrequencyEnum      `json:"DataUploadFrequency"`
	InferenceSchedulerName   string                        `json:"InferenceSchedulerName"`
	RoleArn                  *string                       `json:"RoleArn"`
}
