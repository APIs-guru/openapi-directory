package shared

// OperationFilter
// A complex type that lets you select the operations that you want to list.
type OperationFilter struct {
	Condition *FilterConditionEnum    `json:"Condition,omitempty"`
	Name      OperationFilterNameEnum `json:"Name"`
	Values    []string                `json:"Values"`
}
