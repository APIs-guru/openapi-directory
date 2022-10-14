package shared

type GetContactChannelResult struct {
	ActivationStatus  *ActivationStatusEnum `json:"ActivationStatus,omitempty"`
	ContactArn        string                `json:"ContactArn"`
	ContactChannelArn string                `json:"ContactChannelArn"`
	DeliveryAddress   ContactChannelAddress `json:"DeliveryAddress"`
	Name              string                `json:"Name"`
	Type              ChannelTypeEnum       `json:"Type"`
}
