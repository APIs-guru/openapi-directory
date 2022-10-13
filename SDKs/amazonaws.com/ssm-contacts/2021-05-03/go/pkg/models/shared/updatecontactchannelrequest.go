package shared

type UpdateContactChannelRequest struct {
	ContactChannelID string                 `json:"ContactChannelId"`
	DeliveryAddress  *ContactChannelAddress `json:"DeliveryAddress"`
	Name             *string                `json:"Name"`
}
