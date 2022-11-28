package shared

// ErrorRootCauseEntity
// A collection of segments and corresponding subsegments associated to a trace summary error.
type ErrorRootCauseEntity struct {
	Exceptions []RootCauseException `json:"Exceptions,omitempty"`
	Name       *string              `json:"Name,omitempty"`
	Remote     *bool                `json:"Remote,omitempty"`
}
