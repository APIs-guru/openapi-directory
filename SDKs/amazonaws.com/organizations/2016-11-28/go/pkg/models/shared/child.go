package shared

type Child struct {
	ID   *string        `json:"Id"`
	Type *ChildTypeEnum `json:"Type"`
}
