package shared

type Payouts struct {
	Href    *string  `json:"href,omitempty"`
	Limit   *int32   `json:"limit,omitempty"`
	Next    *string  `json:"next,omitempty"`
	Offset  *int32   `json:"offset,omitempty"`
	Payouts []Payout `json:"payouts,omitempty"`
	Prev    *string  `json:"prev,omitempty"`
	Total   *int32   `json:"total,omitempty"`
}
