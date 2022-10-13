package shared

type Payouts struct {
	Href    *string  `json:"href"`
	Limit   *int32   `json:"limit"`
	Next    *string  `json:"next"`
	Offset  *int32   `json:"offset"`
	Payouts []Payout `json:"payouts"`
	Prev    *string  `json:"prev"`
	Total   *int32   `json:"total"`
}
