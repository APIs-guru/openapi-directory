package shared

type DescribeHubResponse struct {
	AutoEnableControls *bool   `json:"AutoEnableControls,omitempty"`
	HubArn             *string `json:"HubArn,omitempty"`
	SubscribedAt       *string `json:"SubscribedAt,omitempty"`
}
