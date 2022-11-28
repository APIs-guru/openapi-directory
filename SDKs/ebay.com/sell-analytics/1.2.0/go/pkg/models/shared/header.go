package shared

// Header
// Type that defines the headers for the dimension keys and metrics returned in the report.
type Header struct {
	DimensionKeys []Definition `json:"dimensionKeys,omitempty"`
	Metrics       []Definition `json:"metrics,omitempty"`
}
