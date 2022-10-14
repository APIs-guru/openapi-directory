package shared

type URLDispatchRule struct {
	Domain  *string `json:"domain,omitempty"`
	Path    *string `json:"path,omitempty"`
	Service *string `json:"service,omitempty"`
}
