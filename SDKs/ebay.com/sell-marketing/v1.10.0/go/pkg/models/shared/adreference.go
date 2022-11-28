package shared

// AdReference
// This type defines the fields for an ad ID and its associated URL.
type AdReference struct {
	AdID *string `json:"adId,omitempty"`
	Href *string `json:"href,omitempty"`
}
