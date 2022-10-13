package shared

type ActivateContactChannelRequest struct {
	ActivationCode   string `json:"ActivationCode"`
	ContactChannelID string `json:"ContactChannelId"`
}
