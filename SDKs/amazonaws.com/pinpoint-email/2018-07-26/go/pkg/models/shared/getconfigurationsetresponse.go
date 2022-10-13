package shared

type GetConfigurationSetResponse struct {
	ConfigurationSetName *string            `json:"ConfigurationSetName"`
	DeliveryOptions      *DeliveryOptions   `json:"DeliveryOptions"`
	ReputationOptions    *ReputationOptions `json:"ReputationOptions"`
	SendingOptions       *SendingOptions    `json:"SendingOptions"`
	Tags                 []Tag              `json:"Tags"`
	TrackingOptions      *TrackingOptions   `json:"TrackingOptions"`
}
