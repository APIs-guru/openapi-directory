package shared

// StillWaitingResponseSpecification
// Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
type StillWaitingResponseSpecification struct {
	AllowInterrupt     *bool          `json:"allowInterrupt,omitempty"`
	FrequencyInSeconds int64          `json:"frequencyInSeconds"`
	MessageGroups      []MessageGroup `json:"messageGroups"`
	TimeoutInSeconds   int64          `json:"timeoutInSeconds"`
}
