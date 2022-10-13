package shared

type Metric struct {
	Expression *string `json:"expression"`
	Invisible  *bool   `json:"invisible"`
	Name       *string `json:"name"`
}
