package shared

type Resource struct {
	Arn        *string           `json:"arn"`
	Attributes map[string]string `json:"attributes"`
	Feature    *string           `json:"feature"`
	Name       *string           `json:"name"`
	Type       *string           `json:"type"`
}
