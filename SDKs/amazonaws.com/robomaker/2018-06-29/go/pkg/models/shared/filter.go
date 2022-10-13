package shared

type Filter struct {
	Name   *string  `json:"name"`
	Values []string `json:"values"`
}
