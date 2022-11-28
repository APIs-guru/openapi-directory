package shared

// OnSuccess
// A destination for events that were processed successfully.
type OnSuccess struct {
	Destination *string `json:"Destination,omitempty"`
}
