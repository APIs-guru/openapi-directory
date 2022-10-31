package shared

type PatchFilter struct {
	Key    PatchFilterKeyEnum `json:"Key"`
	Values []string           `json:"Values"`
}
