package shared

// ServiceFilter
// A complex type that lets you specify the namespaces that you want to list services for.
type ServiceFilter struct {
	Condition *FilterConditionEnum  `json:"Condition,omitempty"`
	Name      ServiceFilterNameEnum `json:"Name"`
	Values    []string              `json:"Values"`
}
