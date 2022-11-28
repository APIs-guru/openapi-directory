package shared

// OnFailure
// A destination for events that failed processing.
type OnFailure struct {
	Destination *string `json:"Destination,omitempty"`
}
