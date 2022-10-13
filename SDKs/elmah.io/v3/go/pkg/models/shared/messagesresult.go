package shared

type MessagesResult struct {
	Messages []MessageOverview `json:"messages"`
	Total    *int32            `json:"total"`
}
