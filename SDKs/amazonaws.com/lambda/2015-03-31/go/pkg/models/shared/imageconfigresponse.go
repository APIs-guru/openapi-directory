package shared

type ImageConfigResponse struct {
	Error       *ImageConfigError `json:"Error"`
	ImageConfig *ImageConfig      `json:"ImageConfig"`
}
