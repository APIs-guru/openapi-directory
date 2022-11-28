package shared

// ModificationState
// Describes a WorkSpace modification.
type ModificationState struct {
	Resource *ModificationResourceEnumEnum `json:"Resource,omitempty"`
	State    *ModificationStateEnumEnum    `json:"State,omitempty"`
}
