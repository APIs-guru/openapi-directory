package shared

type ResourceSummary struct {
	Arn          *string `json:"arn"`
	ID           *string `json:"id"`
	ResourceType string  `json:"resourceType"`
}
