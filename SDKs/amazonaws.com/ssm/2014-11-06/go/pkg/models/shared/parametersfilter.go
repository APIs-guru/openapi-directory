package shared

type ParametersFilter struct {
	Key    ParametersFilterKeyEnum `json:"Key"`
	Values []string                `json:"Values"`
}
