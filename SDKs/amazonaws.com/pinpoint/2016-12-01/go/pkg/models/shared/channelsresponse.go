package shared

// ChannelsResponse
// Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
type ChannelsResponse struct {
	Channels map[string]ChannelResponse `json:"Channels"`
}
