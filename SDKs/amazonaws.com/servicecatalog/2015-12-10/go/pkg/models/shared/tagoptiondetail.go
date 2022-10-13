package shared

type TagOptionDetail struct {
	Active *bool   `json:"Active"`
	ID     *string `json:"Id"`
	Key    *string `json:"Key"`
	Owner  *string `json:"Owner"`
	Value  *string `json:"Value"`
}
