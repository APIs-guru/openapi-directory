package shared

// ParametersFilter
// This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
type ParametersFilter struct {
	Key    ParametersFilterKeyEnum `json:"Key"`
	Values []string                `json:"Values"`
}
