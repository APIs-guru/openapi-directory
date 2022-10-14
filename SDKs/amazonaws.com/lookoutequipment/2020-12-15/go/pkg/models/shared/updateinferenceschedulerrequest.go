package shared

type UpdateInferenceSchedulerRequest struct {
	DataDelayOffsetInMinutes *int64                        `json:"DataDelayOffsetInMinutes,omitempty"`
	DataInputConfiguration   *InferenceInputConfiguration  `json:"DataInputConfiguration,omitempty"`
	DataOutputConfiguration  *InferenceOutputConfiguration `json:"DataOutputConfiguration,omitempty"`
	DataUploadFrequency      *DataUploadFrequencyEnum      `json:"DataUploadFrequency,omitempty"`
	InferenceSchedulerName   string                        `json:"InferenceSchedulerName"`
	RoleArn                  *string                       `json:"RoleArn,omitempty"`
}
