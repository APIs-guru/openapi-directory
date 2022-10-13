package shared

type ScheduleBByRecipientPage struct {
	Pagination *OffsetInfo            `json:"pagination"`
	Results    []ScheduleBByRecipient `json:"results"`
}
