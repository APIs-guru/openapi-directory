package shared

// CheckpointConfig
// Contains information about the output location for managed spot training checkpoint data.
type CheckpointConfig struct {
	LocalPath *string `json:"LocalPath,omitempty"`
	S3URI     string  `json:"S3Uri"`
}
