package shared

// LiveStreamSessionClient
// What kind of browser the viewer is using for the live stream session.
type LiveStreamSessionClient struct {
	Name    *string `json:"name,omitempty"`
	Type    *string `json:"type,omitempty"`
	Version *string `json:"version,omitempty"`
}
