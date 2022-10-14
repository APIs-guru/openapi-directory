package shared

type Resource struct {
	Name  *string `json:"name,omitempty"`
	Rates []Rate  `json:"rates,omitempty"`
}
