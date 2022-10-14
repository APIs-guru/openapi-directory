package shared

type ScheduleBByRecipientIDPage struct {
	Pagination *OffsetInfo              `json:"pagination,omitempty"`
	Results    []ScheduleBByRecipientID `json:"results,omitempty"`
}
