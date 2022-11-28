package shared

// ResponseSpecification
// Specifies a list of message groups that Amazon Lex uses to respond the user input.
type ResponseSpecification struct {
	AllowInterrupt *bool          `json:"allowInterrupt,omitempty"`
	MessageGroups  []MessageGroup `json:"messageGroups"`
}
