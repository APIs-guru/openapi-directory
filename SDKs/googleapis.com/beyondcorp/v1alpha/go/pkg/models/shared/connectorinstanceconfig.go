package shared

type ConnectorInstanceConfig struct {
	ImageConfig        *ImageConfig           `json:"imageConfig"`
	InstanceConfig     map[string]interface{} `json:"instanceConfig"`
	NotificationConfig *NotificationConfig    `json:"notificationConfig"`
	SequenceNumber     *string                `json:"sequenceNumber"`
}
