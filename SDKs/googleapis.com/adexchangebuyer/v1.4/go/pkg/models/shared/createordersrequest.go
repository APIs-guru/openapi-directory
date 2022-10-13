package shared

type CreateOrdersRequest struct {
	Proposals       []Proposal `json:"proposals"`
	WebPropertyCode *string    `json:"webPropertyCode"`
}
