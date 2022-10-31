package shared



type ImageConfigResponse struct {
    Error *ImageConfigError `json:"Error,omitempty"`
    ImageConfig *ImageConfig `json:"ImageConfig,omitempty"`
    
}

