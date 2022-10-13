package shared

type LaunchProfileInitializationScript struct {
	Script              *string `json:"script"`
	StudioComponentID   *string `json:"studioComponentId"`
	StudioComponentName *string `json:"studioComponentName"`
}
