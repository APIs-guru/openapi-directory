package shared



type NotificationChannelActivationRequest struct {
    ChannelID int32 `json:"channelId"`
    IsEnabled bool `json:"isEnabled"`
    
}

