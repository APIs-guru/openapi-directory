package shared

type WebhooksListResponse struct {
	Data       []Webhook   `json:"data,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
}
