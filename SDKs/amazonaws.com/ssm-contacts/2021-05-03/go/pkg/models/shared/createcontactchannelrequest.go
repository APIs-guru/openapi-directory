package shared

type CreateContactChannelRequest struct {
	ContactID        string                `json:"ContactId"`
	DeferActivation  *bool                 `json:"DeferActivation"`
	DeliveryAddress  ContactChannelAddress `json:"DeliveryAddress"`
	IdempotencyToken *string               `json:"IdempotencyToken"`
	Name             string                `json:"Name"`
	Type             ChannelTypeEnum       `json:"Type"`
}
