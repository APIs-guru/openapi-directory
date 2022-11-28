package shared

// ResponseTimeRootCauseEntity
// A collection of segments and corresponding subsegments associated to a response time warning.
type ResponseTimeRootCauseEntity struct {
	Coverage *float64 `json:"Coverage,omitempty"`
	Name     *string  `json:"Name,omitempty"`
	Remote   *bool    `json:"Remote,omitempty"`
}
