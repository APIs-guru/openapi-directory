package shared

type GetLaunchProfileDetailsResponse struct {
	LaunchProfile            *LaunchProfile           `json:"launchProfile"`
	StreamingImages          []StreamingImage         `json:"streamingImages"`
	StudioComponentSummaries []StudioComponentSummary `json:"studioComponentSummaries"`
}
