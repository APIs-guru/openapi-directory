package shared

type ReportData struct {
	DataLastRefreshed  *string           `json:"dataLastRefreshed"`
	EmptyReason        *string           `json:"emptyReason"`
	IsDataGolden       *bool             `json:"isDataGolden"`
	Maximums           []DateRangeValues `json:"maximums"`
	Minimums           []DateRangeValues `json:"minimums"`
	RowCount           *int32            `json:"rowCount"`
	Rows               []ReportRow       `json:"rows"`
	SamplesReadCounts  []string          `json:"samplesReadCounts"`
	SamplingSpaceSizes []string          `json:"samplingSpaceSizes"`
	Totals             []DateRangeValues `json:"totals"`
}
