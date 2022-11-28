package shared

// VideoSessionLocation
// The location of the viewer.
type VideoSessionLocation struct {
	City    *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
}
