package shared

type Account struct {
	ID            *int32  `json:"id,omitempty"`
	Identifier    *string `json:"identifier,omitempty"`
	ServicepackID *int32  `json:"servicepack_id,omitempty"`
}
