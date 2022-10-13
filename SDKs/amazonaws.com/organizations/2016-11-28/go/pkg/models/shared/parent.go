package shared

type Parent struct {
	ID   *string         `json:"Id"`
	Type *ParentTypeEnum `json:"Type"`
}
