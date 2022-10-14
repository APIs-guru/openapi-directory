package shared

type NamespaceFilter struct {
	Condition *FilterConditionEnum    `json:"Condition,omitempty"`
	Name      NamespaceFilterNameEnum `json:"Name"`
	Values    []string                `json:"Values"`
}
