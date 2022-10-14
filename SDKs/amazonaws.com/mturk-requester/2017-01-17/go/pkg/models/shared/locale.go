package shared

type Locale struct {
	Country     string  `json:"Country"`
	Subdivision *string `json:"Subdivision,omitempty"`
}
