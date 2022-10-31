package shared

type CreateOrdersRequest struct {
	Proposals       []Proposal `json:"proposals,omitempty"`
	WebPropertyCode *string    `json:"webPropertyCode,omitempty"`
}
