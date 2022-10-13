package shared

type GoogleCloudApigeeV1CustomReport struct {
	ChartType      *string                                 `json:"chartType"`
	Comments       []string                                `json:"comments"`
	CreatedAt      *string                                 `json:"createdAt"`
	Dimensions     []string                                `json:"dimensions"`
	DisplayName    *string                                 `json:"displayName"`
	Environment    *string                                 `json:"environment"`
	Filter         *string                                 `json:"filter"`
	FromTime       *string                                 `json:"fromTime"`
	LastModifiedAt *string                                 `json:"lastModifiedAt"`
	LastViewedAt   *string                                 `json:"lastViewedAt"`
	Limit          *string                                 `json:"limit"`
	Metrics        []GoogleCloudApigeeV1CustomReportMetric `json:"metrics"`
	Name           *string                                 `json:"name"`
	Offset         *string                                 `json:"offset"`
	Organization   *string                                 `json:"organization"`
	Properties     []GoogleCloudApigeeV1ReportProperty     `json:"properties"`
	SortByCols     []string                                `json:"sortByCols"`
	SortOrder      *string                                 `json:"sortOrder"`
	Tags           []string                                `json:"tags"`
	TimeUnit       *string                                 `json:"timeUnit"`
	ToTime         *string                                 `json:"toTime"`
	Topk           *string                                 `json:"topk"`
}
