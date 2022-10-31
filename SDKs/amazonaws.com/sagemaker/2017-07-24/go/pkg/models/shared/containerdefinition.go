package shared



type ContainerDefinition struct {
    ContainerHostname *string `json:"ContainerHostname,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    Image *string `json:"Image,omitempty"`
    ImageConfig *ImageConfig `json:"ImageConfig,omitempty"`
    Mode *ContainerModeEnum `json:"Mode,omitempty"`
    ModelDataURL *string `json:"ModelDataUrl,omitempty"`
    ModelPackageName *string `json:"ModelPackageName,omitempty"`
    MultiModelConfig *MultiModelConfig `json:"MultiModelConfig,omitempty"`
    
}

