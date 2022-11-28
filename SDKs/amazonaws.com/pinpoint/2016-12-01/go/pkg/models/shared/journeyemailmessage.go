package shared

// JourneyEmailMessage
// Specifies the "From" address for an email message that's sent to participants in a journey.
type JourneyEmailMessage struct {
	FromAddress *string `json:"FromAddress,omitempty"`
}
