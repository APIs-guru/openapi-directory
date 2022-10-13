package shared

type ScheduleBByRecipientID struct {
	CommitteeID   string   `json:"committee_id"`
	CommitteeName *string  `json:"committee_name"`
	Count         *int32   `json:"count"`
	Cycle         int32    `json:"cycle"`
	MemoCount     *int32   `json:"memo_count"`
	MemoTotal     *float64 `json:"memo_total"`
	RecipientID   string   `json:"recipient_id"`
	RecipientName *string  `json:"recipient_name"`
	Total         *float64 `json:"total"`
}
