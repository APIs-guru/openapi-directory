package shared

type LinkedInvoiceItem struct {
	Code *string `json:"code,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type LinkedInvoiceItemInput struct {
	ID *string `json:"id,omitempty"`
}
