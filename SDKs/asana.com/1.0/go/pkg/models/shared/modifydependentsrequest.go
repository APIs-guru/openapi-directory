package shared

type ModifyDependentsRequest struct {
	Dependents []string `json:"dependents,omitempty"`
}
