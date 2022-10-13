package shared

type URLDispatchRule struct {
	Domain  *string `json:"domain"`
	Path    *string `json:"path"`
	Service *string `json:"service"`
}
