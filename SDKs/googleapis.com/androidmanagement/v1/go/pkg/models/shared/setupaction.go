package shared

// SetupAction
// An action executed during setup.
type SetupAction struct {
	Description *UserFacingMessage `json:"description,omitempty"`
	LaunchApp   *LaunchAppAction   `json:"launchApp,omitempty"`
	Title       *UserFacingMessage `json:"title,omitempty"`
}
