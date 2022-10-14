package shared

type MessagesResult struct {
	Messages []MessageOverview `json:"messages,omitempty"`
	Total    *int32            `json:"total,omitempty"`
}
