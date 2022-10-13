package shared

type ReportRequestSamplingLevelEnum string

const (
	ReportRequestSamplingLevelEnumSamplingUnspecified ReportRequestSamplingLevelEnum = "SAMPLING_UNSPECIFIED"
	ReportRequestSamplingLevelEnumDefault             ReportRequestSamplingLevelEnum = "DEFAULT"
	ReportRequestSamplingLevelEnumSmall               ReportRequestSamplingLevelEnum = "SMALL"
	ReportRequestSamplingLevelEnumLarge               ReportRequestSamplingLevelEnum = "LARGE"
)

type ReportRequest struct {
	CohortGroup            *CohortGroup                    `json:"cohortGroup"`
	DateRanges             []DateRange                     `json:"dateRanges"`
	DimensionFilterClauses []DimensionFilterClause         `json:"dimensionFilterClauses"`
	Dimensions             []Dimension                     `json:"dimensions"`
	FiltersExpression      *string                         `json:"filtersExpression"`
	HideTotals             *bool                           `json:"hideTotals"`
	HideValueRanges        *bool                           `json:"hideValueRanges"`
	IncludeEmptyRows       *bool                           `json:"includeEmptyRows"`
	MetricFilterClauses    []MetricFilterClause            `json:"metricFilterClauses"`
	Metrics                []Metric                        `json:"metrics"`
	OrderBys               []OrderBy                       `json:"orderBys"`
	PageSize               *int32                          `json:"pageSize"`
	PageToken              *string                         `json:"pageToken"`
	Pivots                 []Pivot                         `json:"pivots"`
	SamplingLevel          *ReportRequestSamplingLevelEnum `json:"samplingLevel"`
	Segments               []Segment                       `json:"segments"`
	ViewID                 *string                         `json:"viewId"`
}
