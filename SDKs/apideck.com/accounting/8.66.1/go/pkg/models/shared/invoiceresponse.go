package shared

type InvoiceResponse struct {
	DownstreamID *string `json:"downstream_id"`
	ID           *string `json:"id"`
}
