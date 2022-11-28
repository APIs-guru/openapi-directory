package shared

// AdSource
// Definition of a mediation ad source.
type AdSource struct {
	AdSourceID *string `json:"adSourceId,omitempty"`
	Name       *string `json:"name,omitempty"`
	Title      *string `json:"title,omitempty"`
}
