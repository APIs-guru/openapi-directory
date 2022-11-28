package shared

// LabelingJobResourceConfig
// Configure encryption on the storage volume attached to the ML compute instance used to run automated data labeling model training and inference.
type LabelingJobResourceConfig struct {
	VolumeKmsKeyID *string `json:"VolumeKmsKeyId,omitempty"`
}
