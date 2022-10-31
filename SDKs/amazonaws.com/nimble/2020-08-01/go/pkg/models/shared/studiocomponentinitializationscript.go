package shared



type StudioComponentInitializationScript struct {
    LaunchProfileProtocolVersion *string `json:"launchProfileProtocolVersion,omitempty"`
    Platform *LaunchProfilePlatformEnum `json:"platform,omitempty"`
    RunContext *StudioComponentInitializationScriptRunContextEnum `json:"runContext,omitempty"`
    Script *string `json:"script,omitempty"`
    
}

