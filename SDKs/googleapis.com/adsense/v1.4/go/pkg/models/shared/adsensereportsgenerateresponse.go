package shared

type AdsenseReportsGenerateResponseHeaders struct {
	Currency *string `json:"currency,omitempty"`
	Name     *string `json:"name,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type AdsenseReportsGenerateResponse struct {
	Averages         []string                                `json:"averages,omitempty"`
	EndDate          *string                                 `json:"endDate,omitempty"`
	Headers          []AdsenseReportsGenerateResponseHeaders `json:"headers,omitempty"`
	Kind             *string                                 `json:"kind,omitempty"`
	Rows             [][]string                              `json:"rows,omitempty"`
	StartDate        *string                                 `json:"startDate,omitempty"`
	TotalMatchedRows *string                                 `json:"totalMatchedRows,omitempty"`
	Totals           []string                                `json:"totals,omitempty"`
	Warnings         []string                                `json:"warnings,omitempty"`
}
