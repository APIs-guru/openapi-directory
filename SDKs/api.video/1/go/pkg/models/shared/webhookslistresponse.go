package shared

type WebhooksListResponse struct {
	Data       []Webhook   `json:"data"`
	Pagination *Pagination `json:"pagination"`
}
