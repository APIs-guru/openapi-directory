package shared

type Prompt struct {
	MaxAttempts  int64     `json:"maxAttempts"`
	Messages     []Message `json:"messages"`
	ResponseCard *string   `json:"responseCard,omitempty"`
}
