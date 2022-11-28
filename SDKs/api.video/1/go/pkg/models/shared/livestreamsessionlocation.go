package shared

// LiveStreamSessionLocation
// The location of the viewer of the live stream.
type LiveStreamSessionLocation struct {
	City    *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
}
