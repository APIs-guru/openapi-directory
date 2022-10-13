package shared

type RunPivotReportRequest struct {
	CohortSpec          *CohortSpec       `json:"cohortSpec"`
	CurrencyCode        *string           `json:"currencyCode"`
	DateRanges          []DateRange       `json:"dateRanges"`
	DimensionFilter     *FilterExpression `json:"dimensionFilter"`
	Dimensions          []Dimension       `json:"dimensions"`
	KeepEmptyRows       *bool             `json:"keepEmptyRows"`
	MetricFilter        *FilterExpression `json:"metricFilter"`
	Metrics             []Metric          `json:"metrics"`
	Pivots              []Pivot           `json:"pivots"`
	Property            *string           `json:"property"`
	ReturnPropertyQuota *bool             `json:"returnPropertyQuota"`
}
