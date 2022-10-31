package shared

type LaunchProfileInitializationScript struct {
	Script              *string `json:"script,omitempty"`
	StudioComponentID   *string `json:"studioComponentId,omitempty"`
	StudioComponentName *string `json:"studioComponentName,omitempty"`
}
