package shared

// ImageConfigResponse
// Response to GetFunctionConfiguration request.
type ImageConfigResponse struct {
	Error       *ImageConfigError `json:"Error,omitempty"`
	ImageConfig *ImageConfig      `json:"ImageConfig,omitempty"`
}
