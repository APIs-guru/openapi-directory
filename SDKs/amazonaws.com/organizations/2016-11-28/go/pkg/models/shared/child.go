package shared

// Child
// Contains a list of child entities, either OUs or accounts.
type Child struct {
	ID   *string        `json:"Id,omitempty"`
	Type *ChildTypeEnum `json:"Type,omitempty"`
}
