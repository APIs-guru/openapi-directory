package shared

type WindowsSite struct {
	Bindings []SiteBinding `json:"bindings,omitempty"`
	Name     *string       `json:"name,omitempty"`
	Path     *string       `json:"path,omitempty"`
}
