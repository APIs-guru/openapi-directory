package shared

type GetConfigurationSetResponse struct {
	ConfigurationSetName *string             `json:"ConfigurationSetName"`
	DeliveryOptions      *DeliveryOptions    `json:"DeliveryOptions"`
	ReputationOptions    *ReputationOptions  `json:"ReputationOptions"`
	SendingOptions       *SendingOptions     `json:"SendingOptions"`
	SuppressionOptions   *SuppressionOptions `json:"SuppressionOptions"`
	Tags                 []Tag               `json:"Tags"`
	TrackingOptions      *TrackingOptions    `json:"TrackingOptions"`
}
