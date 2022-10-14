package shared

type MxRecords struct {
	Exchange *string `json:"exchange,omitempty"`
	Priority *int64  `json:"priority,omitempty"`
}
