package shared

// InputStartingPositionConfiguration
// Describes the point at which the application reads from the streaming source.
type InputStartingPositionConfiguration struct {
	InputStartingPosition *InputStartingPositionEnum `json:"InputStartingPosition,omitempty"`
}
