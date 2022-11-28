package shared

// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig
// AppConnectorInstanceConfig defines the instance config of a AppConnector.
type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig struct {
	ImageConfig        *GoogleCloudBeyondcorpAppconnectorsV1ImageConfig        `json:"imageConfig,omitempty"`
	InstanceConfig     map[string]interface{}                                  `json:"instanceConfig,omitempty"`
	NotificationConfig *GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig `json:"notificationConfig,omitempty"`
	SequenceNumber     *string                                                 `json:"sequenceNumber,omitempty"`
}
