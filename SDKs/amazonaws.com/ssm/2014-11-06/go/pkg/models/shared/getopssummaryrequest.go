package shared

type GetOpsSummaryRequest struct {
	Aggregators      []OpsAggregator      `json:"Aggregators,omitempty"`
	Filters          []OpsFilter          `json:"Filters,omitempty"`
	MaxResults       *int64               `json:"MaxResults,omitempty"`
	NextToken        *string              `json:"NextToken,omitempty"`
	ResultAttributes []OpsResultAttribute `json:"ResultAttributes,omitempty"`
	SyncName         *string              `json:"SyncName,omitempty"`
}
