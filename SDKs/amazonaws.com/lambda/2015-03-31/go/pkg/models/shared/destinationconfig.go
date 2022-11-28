package shared

// DestinationConfig
// A configuration object that specifies the destination of an event after Lambda processes it.
type DestinationConfig struct {
	OnFailure *OnFailure `json:"OnFailure,omitempty"`
	OnSuccess *OnSuccess `json:"OnSuccess,omitempty"`
}
