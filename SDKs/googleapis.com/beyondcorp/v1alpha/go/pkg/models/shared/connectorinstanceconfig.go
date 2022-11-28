package shared

// ConnectorInstanceConfig
// ConnectorInstanceConfig defines the instance config of a connector.
type ConnectorInstanceConfig struct {
	ImageConfig        *ImageConfig           `json:"imageConfig,omitempty"`
	InstanceConfig     map[string]interface{} `json:"instanceConfig,omitempty"`
	NotificationConfig *NotificationConfig    `json:"notificationConfig,omitempty"`
	SequenceNumber     *string                `json:"sequenceNumber,omitempty"`
}
