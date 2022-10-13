package shared

type ReportHeaders struct {
	Currency *string `json:"currency"`
	Name     *string `json:"name"`
	Type     *string `json:"type"`
}

type Report struct {
	Averages         []string        `json:"averages"`
	Headers          []ReportHeaders `json:"headers"`
	Kind             *string         `json:"kind"`
	Rows             [][]string      `json:"rows"`
	TotalMatchedRows *string         `json:"totalMatchedRows"`
	Totals           []string        `json:"totals"`
	Warnings         []string        `json:"warnings"`
}
