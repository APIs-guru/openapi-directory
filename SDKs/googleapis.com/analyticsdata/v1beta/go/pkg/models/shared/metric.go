package shared

type Metric struct {
	Expression *string `json:"expression,omitempty"`
	Invisible  *bool   `json:"invisible,omitempty"`
	Name       *string `json:"name,omitempty"`
}
