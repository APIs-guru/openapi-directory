package shared

// PromptSpecification
// Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
type PromptSpecification struct {
	AllowInterrupt *bool          `json:"allowInterrupt,omitempty"`
	MaxRetries     int64          `json:"maxRetries"`
	MessageGroups  []MessageGroup `json:"messageGroups"`
}
