package shared

type ResourceSummary struct {
	Arn          *string `json:"arn,omitempty"`
	ID           *string `json:"id,omitempty"`
	ResourceType string  `json:"resourceType"`
}
