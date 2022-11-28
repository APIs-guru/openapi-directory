package shared

// Prompt
// Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
type Prompt struct {
	MaxAttempts  int64     `json:"maxAttempts"`
	Messages     []Message `json:"messages"`
	ResponseCard *string   `json:"responseCard,omitempty"`
}
