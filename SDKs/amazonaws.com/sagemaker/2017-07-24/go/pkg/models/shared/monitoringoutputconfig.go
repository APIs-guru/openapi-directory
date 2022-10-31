package shared



type MonitoringOutputConfig struct {
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    MonitoringOutputs []MonitoringOutput `json:"MonitoringOutputs"`
    
}

