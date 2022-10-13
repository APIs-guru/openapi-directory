package shared

type TableMember struct {
	Name   *string `json:"name"`
	Schema *string `json:"schema"`
	Type   *string `json:"type"`
}
