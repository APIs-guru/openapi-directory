package shared

type ContentReferenceAttachment struct {
	Body   string  `json:"body"`
	ID     int64   `json:"id"`
	NodeID *string `json:"node_id"`
	Title  string  `json:"title"`
}
