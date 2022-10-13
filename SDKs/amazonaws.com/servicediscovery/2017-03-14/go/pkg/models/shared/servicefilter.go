package shared

type ServiceFilter struct {
	Condition *FilterConditionEnum  `json:"Condition"`
	Name      ServiceFilterNameEnum `json:"Name"`
	Values    []string              `json:"Values"`
}
