package shared

type InferenceSpecification struct {
	Containers                              []ModelPackageContainerDefinition   `json:"Containers"`
	SupportedContentTypes                   []string                            `json:"SupportedContentTypes"`
	SupportedRealtimeInferenceInstanceTypes []ProductionVariantInstanceTypeEnum `json:"SupportedRealtimeInferenceInstanceTypes,omitempty"`
	SupportedResponseMimeTypes              []string                            `json:"SupportedResponseMIMETypes"`
	SupportedTransformInstanceTypes         []TransformInstanceTypeEnum         `json:"SupportedTransformInstanceTypes,omitempty"`
}
