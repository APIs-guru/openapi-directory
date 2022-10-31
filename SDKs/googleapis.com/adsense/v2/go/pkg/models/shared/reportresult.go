package shared

type ReportResult struct {
	Averages         *Row     `json:"averages,omitempty"`
	EndDate          *Date    `json:"endDate,omitempty"`
	Headers          []Header `json:"headers,omitempty"`
	Rows             []Row    `json:"rows,omitempty"`
	StartDate        *Date    `json:"startDate,omitempty"`
	TotalMatchedRows *string  `json:"totalMatchedRows,omitempty"`
	Totals           *Row     `json:"totals,omitempty"`
	Warnings         []string `json:"warnings,omitempty"`
}
