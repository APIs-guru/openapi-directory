package shared

type MonitoringOutputConfig struct {
	KmsKeyID          *string            `json:"KmsKeyId"`
	MonitoringOutputs []MonitoringOutput `json:"MonitoringOutputs"`
}
