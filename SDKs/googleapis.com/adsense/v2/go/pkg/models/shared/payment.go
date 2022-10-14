package shared

type Payment struct {
	Amount *string `json:"amount,omitempty"`
	Date   *Date   `json:"date,omitempty"`
	Name   *string `json:"name,omitempty"`
}
