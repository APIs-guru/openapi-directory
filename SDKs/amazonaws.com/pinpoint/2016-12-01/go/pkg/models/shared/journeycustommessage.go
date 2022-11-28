package shared

// JourneyCustomMessage
// Specifies the message content for a custom channel message that's sent to participants in a journey.
type JourneyCustomMessage struct {
	Data *string `json:"Data,omitempty"`
}
