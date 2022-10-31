package shared

type LiveStreamSessionClient struct {
	Name    *string `json:"name,omitempty"`
	Type    *string `json:"type,omitempty"`
	Version *string `json:"version,omitempty"`
}
