package shared

// AccountDetail
// A detailed representation of an account.
type AccountDetail struct {
	Addons      []Addon      `json:"addons,omitempty"`
	ID          *int32       `json:"id,omitempty"`
	Identifier  *string      `json:"identifier,omitempty"`
	Servicepack *Servicepack `json:"servicepack,omitempty"`
}
