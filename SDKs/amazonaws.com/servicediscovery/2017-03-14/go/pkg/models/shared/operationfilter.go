package shared

type OperationFilter struct {
	Condition *FilterConditionEnum    `json:"Condition"`
	Name      OperationFilterNameEnum `json:"Name"`
	Values    []string                `json:"Values"`
}
