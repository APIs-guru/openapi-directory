package shared

// TracingConfiguration
// Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code>
type TracingConfiguration struct {
	Enabled *bool `json:"enabled,omitempty"`
}
