package shared

// FaultRootCauseEntity
// A collection of segments and corresponding subsegments associated to a trace summary fault error.
type FaultRootCauseEntity struct {
	Exceptions []RootCauseException `json:"Exceptions,omitempty"`
	Name       *string              `json:"Name,omitempty"`
	Remote     *bool                `json:"Remote,omitempty"`
}
