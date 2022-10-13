package shared

type Resource struct {
	Name  *string `json:"name"`
	Rates []Rate  `json:"rates"`
}
