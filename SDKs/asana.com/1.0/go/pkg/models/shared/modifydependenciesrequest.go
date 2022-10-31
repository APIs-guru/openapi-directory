package shared

type ModifyDependenciesRequest struct {
	Dependencies []string `json:"dependencies,omitempty"`
}
