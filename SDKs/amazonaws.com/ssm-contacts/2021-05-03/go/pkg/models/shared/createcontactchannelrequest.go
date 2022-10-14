package shared

type CreateContactChannelRequest struct {
	ContactID        string                `json:"ContactId"`
	DeferActivation  *bool                 `json:"DeferActivation,omitempty"`
	DeliveryAddress  ContactChannelAddress `json:"DeliveryAddress"`
	IdempotencyToken *string               `json:"IdempotencyToken,omitempty"`
	Name             string                `json:"Name"`
	Type             ChannelTypeEnum       `json:"Type"`
}
