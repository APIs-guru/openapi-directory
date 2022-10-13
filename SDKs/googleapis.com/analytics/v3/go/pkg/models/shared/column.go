package shared

type Column struct {
	Attributes map[string]string `json:"attributes"`
	ID         *string           `json:"id"`
	Kind       *string           `json:"kind"`
}
