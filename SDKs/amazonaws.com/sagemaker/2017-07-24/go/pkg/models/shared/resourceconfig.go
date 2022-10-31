package shared



type ResourceConfig struct {
    InstanceCount int64 `json:"InstanceCount"`
    InstanceType TrainingInstanceTypeEnum `json:"InstanceType"`
    VolumeKmsKeyID *string `json:"VolumeKmsKeyId,omitempty"`
    VolumeSizeInGb int64 `json:"VolumeSizeInGB"`
    
}

