package shared

type SetupAction struct {
	Description *UserFacingMessage `json:"description,omitempty"`
	LaunchApp   *LaunchAppAction   `json:"launchApp,omitempty"`
	Title       *UserFacingMessage `json:"title,omitempty"`
}
