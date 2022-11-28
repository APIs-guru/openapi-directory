package shared

// Service
// The metadata for a service, such as the service code and available attribute names.
type Service struct {
	AttributeNames []string `json:"AttributeNames,omitempty"`
	ServiceCode    *string  `json:"ServiceCode,omitempty"`
}
