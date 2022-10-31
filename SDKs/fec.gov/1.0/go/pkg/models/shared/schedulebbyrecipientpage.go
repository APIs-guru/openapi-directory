package shared

type ScheduleBByRecipientPage struct {
	Pagination *OffsetInfo            `json:"pagination,omitempty"`
	Results    []ScheduleBByRecipient `json:"results,omitempty"`
}
