package shared

type Filter struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
