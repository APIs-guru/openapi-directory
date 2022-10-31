package shared

type Filter struct {
	Name   *string  `json:"Name,omitempty"`
	Values []string `json:"Values,omitempty"`
}
