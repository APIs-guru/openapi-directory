package shared

// Statement
// A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
type Statement struct {
	Messages     []Message `json:"messages"`
	ResponseCard *string   `json:"responseCard,omitempty"`
}
