package shared

type ScheduleBByRecipient struct {
	CommitteeID   string   `json:"committee_id"`
	Count         *int32   `json:"count"`
	Cycle         int32    `json:"cycle"`
	MemoCount     *int32   `json:"memo_count"`
	MemoTotal     *float64 `json:"memo_total"`
	RecipientName string   `json:"recipient_name"`
	Total         *float64 `json:"total"`
}
