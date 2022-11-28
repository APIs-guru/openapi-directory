package shared

// JourneyPushMessage
// Specifies the message configuration for a push notification that's sent to participants in a journey.
type JourneyPushMessage struct {
	TimeToLive *string `json:"TimeToLive,omitempty"`
}
