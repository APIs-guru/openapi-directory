package shared

type Signin struct {
	Dt    *float64 `json:"dt"`
	Email *string  `json:"email"`
	ID    *int64   `json:"id"`
	Name  string   `json:"name"`
	Phone string   `json:"phone"`
}
