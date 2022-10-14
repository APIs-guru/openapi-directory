package shared

type OpsAggregator struct {
	AggregatorType *string           `json:"AggregatorType,omitempty"`
	Aggregators    []OpsAggregator   `json:"Aggregators,omitempty"`
	AttributeName  *string           `json:"AttributeName,omitempty"`
	Filters        []OpsFilter       `json:"Filters,omitempty"`
	TypeName       *string           `json:"TypeName,omitempty"`
	Values         map[string]string `json:"Values,omitempty"`
}
