package shared

// GetConfigurationSetResponse
// Information about a configuration set.
type GetConfigurationSetResponse struct {
	ConfigurationSetName *string            `json:"ConfigurationSetName,omitempty"`
	DeliveryOptions      *DeliveryOptions   `json:"DeliveryOptions,omitempty"`
	ReputationOptions    *ReputationOptions `json:"ReputationOptions,omitempty"`
	SendingOptions       *SendingOptions    `json:"SendingOptions,omitempty"`
	Tags                 []Tag              `json:"Tags,omitempty"`
	TrackingOptions      *TrackingOptions   `json:"TrackingOptions,omitempty"`
}
