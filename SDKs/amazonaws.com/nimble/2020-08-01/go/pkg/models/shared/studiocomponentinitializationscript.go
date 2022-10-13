package shared

type StudioComponentInitializationScript struct {
	LaunchProfileProtocolVersion *string                                            `json:"launchProfileProtocolVersion"`
	Platform                     *LaunchProfilePlatformEnum                         `json:"platform"`
	RunContext                   *StudioComponentInitializationScriptRunContextEnum `json:"runContext"`
	Script                       *string                                            `json:"script"`
}
