package shared

type ScheduleBByRecipientIDPage struct {
	Pagination *OffsetInfo              `json:"pagination"`
	Results    []ScheduleBByRecipientID `json:"results"`
}
