package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig struct {
	ImageConfig        *GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig        `json:"imageConfig"`
	InstanceConfig     map[string]interface{}                                       `json:"instanceConfig"`
	NotificationConfig *GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig `json:"notificationConfig"`
	SequenceNumber     *string                                                      `json:"sequenceNumber"`
}
