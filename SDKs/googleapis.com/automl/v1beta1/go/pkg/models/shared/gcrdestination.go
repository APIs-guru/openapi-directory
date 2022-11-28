package shared

// GcrDestination
// The GCR location where the image must be pushed to.
type GcrDestination struct {
	OutputURI *string `json:"outputUri,omitempty"`
}
