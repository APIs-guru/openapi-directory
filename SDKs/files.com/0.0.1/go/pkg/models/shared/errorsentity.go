package shared

type ErrorsEntity struct {
	Fields   []string `json:"fields,omitempty"`
	Messages []string `json:"messages,omitempty"`
}
