package shared

type Tax struct {
	ID         *int32   `json:"Id"`
	Name       *string  `json:"Name"`
	Percentage *float64 `json:"Percentage"`
	UserID     *int32   `json:"UserId"`
}
