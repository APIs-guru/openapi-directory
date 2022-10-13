package shared

type Account struct {
	ID            *int32  `json:"id"`
	Identifier    *string `json:"identifier"`
	ServicepackID *int32  `json:"servicepack_id"`
}
