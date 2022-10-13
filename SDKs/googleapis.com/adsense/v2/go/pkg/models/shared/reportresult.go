package shared

type ReportResult struct {
	Averages         *Row     `json:"averages"`
	EndDate          *Date    `json:"endDate"`
	Headers          []Header `json:"headers"`
	Rows             []Row    `json:"rows"`
	StartDate        *Date    `json:"startDate"`
	TotalMatchedRows *string  `json:"totalMatchedRows"`
	Totals           *Row     `json:"totals"`
	Warnings         []string `json:"warnings"`
}
