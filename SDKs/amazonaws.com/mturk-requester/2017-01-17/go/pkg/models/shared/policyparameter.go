package shared

type PolicyParameter struct {
	Key        *string             `json:"Key"`
	MapEntries []ParameterMapEntry `json:"MapEntries"`
	Values     []string            `json:"Values"`
}
