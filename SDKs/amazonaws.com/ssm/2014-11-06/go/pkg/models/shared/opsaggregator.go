package shared

type OpsAggregator struct {
	AggregatorType *string           `json:"AggregatorType"`
	Aggregators    []OpsAggregator   `json:"Aggregators"`
	AttributeName  *string           `json:"AttributeName"`
	Filters        []OpsFilter       `json:"Filters"`
	TypeName       *string           `json:"TypeName"`
	Values         map[string]string `json:"Values"`
}
