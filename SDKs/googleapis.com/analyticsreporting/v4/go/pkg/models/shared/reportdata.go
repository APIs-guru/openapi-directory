package shared

type ReportData struct {
	DataLastRefreshed  *string           `json:"dataLastRefreshed,omitempty"`
	EmptyReason        *string           `json:"emptyReason,omitempty"`
	IsDataGolden       *bool             `json:"isDataGolden,omitempty"`
	Maximums           []DateRangeValues `json:"maximums,omitempty"`
	Minimums           []DateRangeValues `json:"minimums,omitempty"`
	RowCount           *int32            `json:"rowCount,omitempty"`
	Rows               []ReportRow       `json:"rows,omitempty"`
	SamplesReadCounts  []string          `json:"samplesReadCounts,omitempty"`
	SamplingSpaceSizes []string          `json:"samplingSpaceSizes,omitempty"`
	Totals             []DateRangeValues `json:"totals,omitempty"`
}
