package shared

// IngressSource
// The source that IngressPolicy authorizes access from.
type IngressSource struct {
	AccessLevel *string `json:"accessLevel,omitempty"`
	Resource    *string `json:"resource,omitempty"`
}
