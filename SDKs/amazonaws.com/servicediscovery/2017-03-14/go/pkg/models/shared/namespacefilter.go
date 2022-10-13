package shared

type NamespaceFilter struct {
	Condition *FilterConditionEnum    `json:"Condition"`
	Name      NamespaceFilterNameEnum `json:"Name"`
	Values    []string                `json:"Values"`
}
