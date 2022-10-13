package shared

type AdsenseReportsGenerateResponseHeaders struct {
	Currency *string `json:"currency"`
	Name     *string `json:"name"`
	Type     *string `json:"type"`
}

type AdsenseReportsGenerateResponse struct {
	Averages         []string                                `json:"averages"`
	EndDate          *string                                 `json:"endDate"`
	Headers          []AdsenseReportsGenerateResponseHeaders `json:"headers"`
	Kind             *string                                 `json:"kind"`
	Rows             [][]string                              `json:"rows"`
	StartDate        *string                                 `json:"startDate"`
	TotalMatchedRows *string                                 `json:"totalMatchedRows"`
	Totals           []string                                `json:"totals"`
	Warnings         []string                                `json:"warnings"`
}
