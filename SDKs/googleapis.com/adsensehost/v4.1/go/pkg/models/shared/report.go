package shared

type ReportHeaders struct {
	Currency *string `json:"currency,omitempty"`
	Name     *string `json:"name,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type Report struct {
	Averages         []string        `json:"averages,omitempty"`
	Headers          []ReportHeaders `json:"headers,omitempty"`
	Kind             *string         `json:"kind,omitempty"`
	Rows             [][]string      `json:"rows,omitempty"`
	TotalMatchedRows *string         `json:"totalMatchedRows,omitempty"`
	Totals           []string        `json:"totals,omitempty"`
	Warnings         []string        `json:"warnings,omitempty"`
}
