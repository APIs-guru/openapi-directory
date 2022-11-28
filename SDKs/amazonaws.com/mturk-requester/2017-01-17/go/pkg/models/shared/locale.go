package shared

// Locale
// The Locale data structure represents a geographical region or location.
type Locale struct {
	Country     string  `json:"Country"`
	Subdivision *string `json:"Subdivision,omitempty"`
}
