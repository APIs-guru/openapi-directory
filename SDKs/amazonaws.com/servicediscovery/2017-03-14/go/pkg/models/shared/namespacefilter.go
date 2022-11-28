package shared

// NamespaceFilter
// A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
type NamespaceFilter struct {
	Condition *FilterConditionEnum    `json:"Condition,omitempty"`
	Name      NamespaceFilterNameEnum `json:"Name"`
	Values    []string                `json:"Values"`
}
