package shared

type Statement struct {
	Messages     []Message `json:"messages"`
	ResponseCard *string   `json:"responseCard,omitempty"`
}
