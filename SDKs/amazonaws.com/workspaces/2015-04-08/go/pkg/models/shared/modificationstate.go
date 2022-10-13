package shared

type ModificationState struct {
	Resource *ModificationResourceEnumEnum `json:"Resource"`
	State    *ModificationStateEnumEnum    `json:"State"`
}
