package shared

type ContainerDefinition struct {
	ContainerHostname *string            `json:"ContainerHostname"`
	Environment       map[string]string  `json:"Environment"`
	Image             *string            `json:"Image"`
	ImageConfig       *ImageConfig       `json:"ImageConfig"`
	Mode              *ContainerModeEnum `json:"Mode"`
	ModelDataURL      *string            `json:"ModelDataUrl"`
	ModelPackageName  *string            `json:"ModelPackageName"`
	MultiModelConfig  *MultiModelConfig  `json:"MultiModelConfig"`
}
