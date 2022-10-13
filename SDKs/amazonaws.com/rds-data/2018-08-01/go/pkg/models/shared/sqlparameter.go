package shared

type SQLParameter struct {
	Name     *string       `json:"name"`
	TypeHint *TypeHintEnum `json:"typeHint"`
	Value    *Field        `json:"value"`
}
