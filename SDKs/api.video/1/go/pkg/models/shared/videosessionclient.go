package shared

// VideoSessionClient
// What kind of browser the viewer is using for the video session.
type VideoSessionClient struct {
	Name    *string `json:"name,omitempty"`
	Type    *string `json:"type,omitempty"`
	Version *string `json:"version,omitempty"`
}
