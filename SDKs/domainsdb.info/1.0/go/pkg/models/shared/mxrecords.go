package shared

type MxRecords struct {
	Exchange *string `json:"exchange"`
	Priority *int64  `json:"priority"`
}
