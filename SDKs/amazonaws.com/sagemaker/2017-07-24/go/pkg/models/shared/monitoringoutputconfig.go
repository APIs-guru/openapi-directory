package shared

// MonitoringOutputConfig
// The output configuration for monitoring jobs.
type MonitoringOutputConfig struct {
	KmsKeyID          *string            `json:"KmsKeyId,omitempty"`
	MonitoringOutputs []MonitoringOutput `json:"MonitoringOutputs"`
}
