package shared

type Account struct {
	ID     *string `json:"id"`
	Kind   *string `json:"kind"`
	Name   *string `json:"name"`
	Status *string `json:"status"`
}
