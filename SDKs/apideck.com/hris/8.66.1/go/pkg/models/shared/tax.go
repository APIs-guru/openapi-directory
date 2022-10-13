package shared

type Tax struct {
	Amount   *float64 `json:"amount"`
	Employer *bool    `json:"employer"`
	Name     *string  `json:"name"`
}
