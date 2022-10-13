package shared

type DescribeHubResponse struct {
	AutoEnableControls *bool   `json:"AutoEnableControls"`
	HubArn             *string `json:"HubArn"`
	SubscribedAt       *string `json:"SubscribedAt"`
}
