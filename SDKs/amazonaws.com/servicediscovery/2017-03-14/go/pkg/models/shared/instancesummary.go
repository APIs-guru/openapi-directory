package shared

type InstanceSummary struct {
	Attributes map[string]string `json:"Attributes"`
	ID         *string           `json:"Id"`
}
