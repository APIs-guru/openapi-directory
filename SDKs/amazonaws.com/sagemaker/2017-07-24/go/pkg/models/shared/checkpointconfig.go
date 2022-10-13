package shared

type CheckpointConfig struct {
	LocalPath *string `json:"LocalPath"`
	S3URI     string  `json:"S3Uri"`
}
