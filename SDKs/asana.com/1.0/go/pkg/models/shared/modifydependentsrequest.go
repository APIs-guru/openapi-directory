package shared

// ModifyDependentsRequest
// A set of dependent tasks.
type ModifyDependentsRequest struct {
	Dependents []string `json:"dependents,omitempty"`
}
