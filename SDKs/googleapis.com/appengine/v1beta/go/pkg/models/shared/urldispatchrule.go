package shared

// URLDispatchRule
// Rules to match an HTTP request and dispatch that request to a service.
type URLDispatchRule struct {
	Domain  *string `json:"domain,omitempty"`
	Path    *string `json:"path,omitempty"`
	Service *string `json:"service,omitempty"`
}
