package shared

// ResourceSummary
// A summary of a resource available on the device.
type ResourceSummary struct {
	Arn          *string `json:"arn,omitempty"`
	ID           *string `json:"id,omitempty"`
	ResourceType string  `json:"resourceType"`
}
