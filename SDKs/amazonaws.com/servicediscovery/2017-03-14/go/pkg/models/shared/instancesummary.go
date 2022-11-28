package shared

// InstanceSummary
// A complex type that contains information about the instances that you registered by using a specified service.
type InstanceSummary struct {
	Attributes map[string]string `json:"Attributes,omitempty"`
	ID         *string           `json:"Id,omitempty"`
}
