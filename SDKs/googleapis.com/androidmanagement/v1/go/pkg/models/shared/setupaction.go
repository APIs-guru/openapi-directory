package shared

type SetupAction struct {
	Description *UserFacingMessage `json:"description"`
	LaunchApp   *LaunchAppAction   `json:"launchApp"`
	Title       *UserFacingMessage `json:"title"`
}
