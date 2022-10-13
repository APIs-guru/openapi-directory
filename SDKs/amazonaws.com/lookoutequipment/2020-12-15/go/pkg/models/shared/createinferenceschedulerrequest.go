package shared

type CreateInferenceSchedulerRequest struct {
	ClientToken              string                       `json:"ClientToken"`
	DataDelayOffsetInMinutes *int64                       `json:"DataDelayOffsetInMinutes"`
	DataInputConfiguration   InferenceInputConfiguration  `json:"DataInputConfiguration"`
	DataOutputConfiguration  InferenceOutputConfiguration `json:"DataOutputConfiguration"`
	DataUploadFrequency      DataUploadFrequencyEnum      `json:"DataUploadFrequency"`
	InferenceSchedulerName   string                       `json:"InferenceSchedulerName"`
	ModelName                string                       `json:"ModelName"`
	RoleArn                  string                       `json:"RoleArn"`
	ServerSideKmsKeyID       *string                      `json:"ServerSideKmsKeyId"`
	Tags                     []Tag                        `json:"Tags"`
}
