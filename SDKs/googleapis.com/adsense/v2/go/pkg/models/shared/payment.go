package shared

type Payment struct {
	Amount *string `json:"amount"`
	Date   *Date   `json:"date"`
	Name   *string `json:"name"`
}
