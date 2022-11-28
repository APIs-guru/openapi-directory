package shared

// V2APITarget
// A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
type V2APITarget struct {
	Methods []string `json:"methods,omitempty"`
	Service *string  `json:"service,omitempty"`
}
