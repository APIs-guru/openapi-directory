package shared

type NotFound struct {
	Name   *string `json:"name,omitempty"`
	Status *int64  `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}
