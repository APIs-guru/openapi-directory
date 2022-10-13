package shared

type GetOpsSummaryRequest struct {
	Aggregators      []OpsAggregator      `json:"Aggregators"`
	Filters          []OpsFilter          `json:"Filters"`
	MaxResults       *int64               `json:"MaxResults"`
	NextToken        *string              `json:"NextToken"`
	ResultAttributes []OpsResultAttribute `json:"ResultAttributes"`
	SyncName         *string              `json:"SyncName"`
}
