package shared

type WindowsSite struct {
	Bindings []SiteBinding `json:"bindings"`
	Name     *string       `json:"name"`
	Path     *string       `json:"path"`
}
