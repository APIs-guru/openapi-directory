package shared

type ContactChannel struct {
	ActivationStatus  ActivationStatusEnum  `json:"ActivationStatus"`
	ContactArn        string                `json:"ContactArn"`
	ContactChannelArn string                `json:"ContactChannelArn"`
	DeliveryAddress   ContactChannelAddress `json:"DeliveryAddress"`
	Name              string                `json:"Name"`
	Type              *ChannelTypeEnum      `json:"Type"`
}
