package shared

// Runnable
// Runnable describes instructions for executing a specific script or container as part of a Task.
type Runnable struct {
	AlwaysRun        *bool        `json:"alwaysRun,omitempty"`
	Background       *bool        `json:"background,omitempty"`
	Barrier          *Barrier     `json:"barrier,omitempty"`
	Container        *Container   `json:"container,omitempty"`
	Environment      *Environment `json:"environment,omitempty"`
	IgnoreExitStatus *bool        `json:"ignoreExitStatus,omitempty"`
	Script           *Script      `json:"script,omitempty"`
	Timeout          *string      `json:"timeout,omitempty"`
}
