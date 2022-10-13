package shared

type ErrorsEntity struct {
	Fields   []string `json:"fields"`
	Messages []string `json:"messages"`
}
