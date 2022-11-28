package shared

// GcsDestination
// The Google Cloud Storage location where the output is to be written to.
type GcsDestination struct {
	OutputURIPrefix *string `json:"outputUriPrefix,omitempty"`
}
