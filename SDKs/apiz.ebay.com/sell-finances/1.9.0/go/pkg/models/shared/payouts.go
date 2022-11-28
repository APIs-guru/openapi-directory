package shared

// Payouts
// This type is the base response type of the getPayouts method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set.
type Payouts struct {
	Href    *string  `json:"href,omitempty"`
	Limit   *int32   `json:"limit,omitempty"`
	Next    *string  `json:"next,omitempty"`
	Offset  *int32   `json:"offset,omitempty"`
	Payouts []Payout `json:"payouts,omitempty"`
	Prev    *string  `json:"prev,omitempty"`
	Total   *int32   `json:"total,omitempty"`
}
