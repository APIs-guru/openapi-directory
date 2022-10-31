package shared

type ReportRequestSamplingLevelEnum string

const (
	ReportRequestSamplingLevelEnumSamplingUnspecified ReportRequestSamplingLevelEnum = "SAMPLING_UNSPECIFIED"
	ReportRequestSamplingLevelEnumDefault             ReportRequestSamplingLevelEnum = "DEFAULT"
	ReportRequestSamplingLevelEnumSmall               ReportRequestSamplingLevelEnum = "SMALL"
	ReportRequestSamplingLevelEnumLarge               ReportRequestSamplingLevelEnum = "LARGE"
)

type ReportRequest struct {
	CohortGroup            *CohortGroup                    `json:"cohortGroup,omitempty"`
	DateRanges             []DateRange                     `json:"dateRanges,omitempty"`
	DimensionFilterClauses []DimensionFilterClause         `json:"dimensionFilterClauses,omitempty"`
	Dimensions             []Dimension                     `json:"dimensions,omitempty"`
	FiltersExpression      *string                         `json:"filtersExpression,omitempty"`
	HideTotals             *bool                           `json:"hideTotals,omitempty"`
	HideValueRanges        *bool                           `json:"hideValueRanges,omitempty"`
	IncludeEmptyRows       *bool                           `json:"includeEmptyRows,omitempty"`
	MetricFilterClauses    []MetricFilterClause            `json:"metricFilterClauses,omitempty"`
	Metrics                []Metric                        `json:"metrics,omitempty"`
	OrderBys               []OrderBy                       `json:"orderBys,omitempty"`
	PageSize               *int32                          `json:"pageSize,omitempty"`
	PageToken              *string                         `json:"pageToken,omitempty"`
	Pivots                 []Pivot                         `json:"pivots,omitempty"`
	SamplingLevel          *ReportRequestSamplingLevelEnum `json:"samplingLevel,omitempty"`
	Segments               []Segment                       `json:"segments,omitempty"`
	ViewID                 *string                         `json:"viewId,omitempty"`
}
