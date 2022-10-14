package shared

type ScheduleBByRecipient struct {
	CommitteeID   string   `json:"committee_id"`
	Count         *int32   `json:"count,omitempty"`
	Cycle         int32    `json:"cycle"`
	MemoCount     *int32   `json:"memo_count,omitempty"`
	MemoTotal     *float64 `json:"memo_total,omitempty"`
	RecipientName string   `json:"recipient_name"`
	Total         *float64 `json:"total,omitempty"`
}
