package shared

type Child struct {
	ID   *string        `json:"Id,omitempty"`
	Type *ChildTypeEnum `json:"Type,omitempty"`
}
