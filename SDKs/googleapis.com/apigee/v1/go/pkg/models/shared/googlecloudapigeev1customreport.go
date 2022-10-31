package shared

type GoogleCloudApigeeV1CustomReport struct {
	ChartType      *string                                 `json:"chartType,omitempty"`
	Comments       []string                                `json:"comments,omitempty"`
	CreatedAt      *string                                 `json:"createdAt,omitempty"`
	Dimensions     []string                                `json:"dimensions,omitempty"`
	DisplayName    *string                                 `json:"displayName,omitempty"`
	Environment    *string                                 `json:"environment,omitempty"`
	Filter         *string                                 `json:"filter,omitempty"`
	FromTime       *string                                 `json:"fromTime,omitempty"`
	LastModifiedAt *string                                 `json:"lastModifiedAt,omitempty"`
	LastViewedAt   *string                                 `json:"lastViewedAt,omitempty"`
	Limit          *string                                 `json:"limit,omitempty"`
	Metrics        []GoogleCloudApigeeV1CustomReportMetric `json:"metrics,omitempty"`
	Name           *string                                 `json:"name,omitempty"`
	Offset         *string                                 `json:"offset,omitempty"`
	Organization   *string                                 `json:"organization,omitempty"`
	Properties     []GoogleCloudApigeeV1ReportProperty     `json:"properties,omitempty"`
	SortByCols     []string                                `json:"sortByCols,omitempty"`
	SortOrder      *string                                 `json:"sortOrder,omitempty"`
	Tags           []string                                `json:"tags,omitempty"`
	TimeUnit       *string                                 `json:"timeUnit,omitempty"`
	ToTime         *string                                 `json:"toTime,omitempty"`
	Topk           *string                                 `json:"topk,omitempty"`
}
