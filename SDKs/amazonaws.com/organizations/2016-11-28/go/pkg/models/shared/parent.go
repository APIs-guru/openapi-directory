package shared

type Parent struct {
	ID   *string         `json:"Id,omitempty"`
	Type *ParentTypeEnum `json:"Type,omitempty"`
}
