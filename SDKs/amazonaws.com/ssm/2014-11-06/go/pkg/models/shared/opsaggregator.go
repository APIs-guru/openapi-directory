package shared

// OpsAggregator
// One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.
type OpsAggregator struct {
	AggregatorType *string           `json:"AggregatorType,omitempty"`
	Aggregators    []OpsAggregator   `json:"Aggregators,omitempty"`
	AttributeName  *string           `json:"AttributeName,omitempty"`
	Filters        []OpsFilter       `json:"Filters,omitempty"`
	TypeName       *string           `json:"TypeName,omitempty"`
	Values         map[string]string `json:"Values,omitempty"`
}
