package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig struct {
	ImageConfig        *GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig        `json:"imageConfig,omitempty"`
	InstanceConfig     map[string]interface{}                                       `json:"instanceConfig,omitempty"`
	NotificationConfig *GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig `json:"notificationConfig,omitempty"`
	SequenceNumber     *string                                                      `json:"sequenceNumber,omitempty"`
}
