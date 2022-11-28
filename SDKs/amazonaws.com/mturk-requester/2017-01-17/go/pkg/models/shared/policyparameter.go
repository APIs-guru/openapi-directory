package shared

// PolicyParameter
//
//	Name of the parameter from the Review policy.
type PolicyParameter struct {
	Key        *string             `json:"Key,omitempty"`
	MapEntries []ParameterMapEntry `json:"MapEntries,omitempty"`
	Values     []string            `json:"Values,omitempty"`
}
