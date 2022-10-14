package shared

type ModificationState struct {
	Resource *ModificationResourceEnumEnum `json:"Resource,omitempty"`
	State    *ModificationStateEnumEnum    `json:"State,omitempty"`
}
