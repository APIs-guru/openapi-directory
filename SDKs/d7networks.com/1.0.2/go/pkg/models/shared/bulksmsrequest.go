package shared

type BulkSmsRequest struct {
	Messages []Message `json:"messages"`
}
