package shared



type UpdateContactChannelRequest struct {
    ContactChannelID string `json:"ContactChannelId"`
    DeliveryAddress *ContactChannelAddress `json:"DeliveryAddress,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

