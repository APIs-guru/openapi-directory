package shared



type CreateInferenceSchedulerRequest struct {
    ClientToken string `json:"ClientToken"`
    DataDelayOffsetInMinutes *int64 `json:"DataDelayOffsetInMinutes,omitempty"`
    DataInputConfiguration InferenceInputConfiguration `json:"DataInputConfiguration"`
    DataOutputConfiguration InferenceOutputConfiguration `json:"DataOutputConfiguration"`
    DataUploadFrequency DataUploadFrequencyEnum `json:"DataUploadFrequency"`
    InferenceSchedulerName string `json:"InferenceSchedulerName"`
    ModelName string `json:"ModelName"`
    RoleArn string `json:"RoleArn"`
    ServerSideKmsKeyID *string `json:"ServerSideKmsKeyId,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

