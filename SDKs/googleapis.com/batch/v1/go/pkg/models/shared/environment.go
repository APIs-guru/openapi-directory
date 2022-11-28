package shared

// Environment
// An Environment describes a collection of environment variables to set when executing Tasks.
type Environment struct {
	Variables map[string]string `json:"variables,omitempty"`
}
