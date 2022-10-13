package shared

type ModelPackageContainerDefinition struct {
	ContainerHostname *string           `json:"ContainerHostname"`
	Environment       map[string]string `json:"Environment"`
	Image             string            `json:"Image"`
	ImageDigest       *string           `json:"ImageDigest"`
	ModelDataURL      *string           `json:"ModelDataUrl"`
	ProductID         *string           `json:"ProductId"`
}
