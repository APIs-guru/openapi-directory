package shared

type Tax struct {
	ID         *int32   `json:"Id,omitempty"`
	Name       *string  `json:"Name,omitempty"`
	Percentage *float64 `json:"Percentage,omitempty"`
	UserID     *int32   `json:"UserId,omitempty"`
}
