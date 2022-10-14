package shared

type ScheduleBByRecipientID struct {
	CommitteeID   string   `json:"committee_id"`
	CommitteeName *string  `json:"committee_name,omitempty"`
	Count         *int32   `json:"count,omitempty"`
	Cycle         int32    `json:"cycle"`
	MemoCount     *int32   `json:"memo_count,omitempty"`
	MemoTotal     *float64 `json:"memo_total,omitempty"`
	RecipientID   string   `json:"recipient_id"`
	RecipientName *string  `json:"recipient_name,omitempty"`
	Total         *float64 `json:"total,omitempty"`
}
