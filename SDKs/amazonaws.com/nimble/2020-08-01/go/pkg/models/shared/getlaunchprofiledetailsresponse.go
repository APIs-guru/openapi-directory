package shared

type GetLaunchProfileDetailsResponse struct {
	LaunchProfile            *LaunchProfile           `json:"launchProfile,omitempty"`
	StreamingImages          []StreamingImage         `json:"streamingImages,omitempty"`
	StudioComponentSummaries []StudioComponentSummary `json:"studioComponentSummaries,omitempty"`
}
