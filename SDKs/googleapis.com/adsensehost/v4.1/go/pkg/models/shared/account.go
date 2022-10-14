package shared

type Account struct {
	ID     *string `json:"id,omitempty"`
	Kind   *string `json:"kind,omitempty"`
	Name   *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
}
