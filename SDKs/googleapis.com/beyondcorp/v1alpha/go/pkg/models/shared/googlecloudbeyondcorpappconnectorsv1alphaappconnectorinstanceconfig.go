package shared

// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig
// AppConnectorInstanceConfig defines the instance config of a AppConnector.
type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig struct {
	ImageConfig        *GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig        `json:"imageConfig,omitempty"`
	InstanceConfig     map[string]interface{}                                       `json:"instanceConfig,omitempty"`
	NotificationConfig *GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig `json:"notificationConfig,omitempty"`
	SequenceNumber     *string                                                      `json:"sequenceNumber,omitempty"`
}
