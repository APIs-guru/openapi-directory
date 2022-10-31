package shared



type RunPivotReportRequest struct {
    CohortSpec *CohortSpec `json:"cohortSpec,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DateRanges []DateRange `json:"dateRanges,omitempty"`
    DimensionFilter *FilterExpression `json:"dimensionFilter,omitempty"`
    Dimensions []Dimension `json:"dimensions,omitempty"`
    KeepEmptyRows *bool `json:"keepEmptyRows,omitempty"`
    MetricFilter *FilterExpression `json:"metricFilter,omitempty"`
    Metrics []Metric `json:"metrics,omitempty"`
    Pivots []Pivot `json:"pivots,omitempty"`
    Property *string `json:"property,omitempty"`
    ReturnPropertyQuota *bool `json:"returnPropertyQuota,omitempty"`
    
}

