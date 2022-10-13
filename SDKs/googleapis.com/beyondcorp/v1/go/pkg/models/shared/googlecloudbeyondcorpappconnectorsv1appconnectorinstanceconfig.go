package shared

type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig struct {
	ImageConfig        *GoogleCloudBeyondcorpAppconnectorsV1ImageConfig        `json:"imageConfig"`
	InstanceConfig     map[string]interface{}                                  `json:"instanceConfig"`
	NotificationConfig *GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig `json:"notificationConfig"`
	SequenceNumber     *string                                                 `json:"sequenceNumber"`
}
