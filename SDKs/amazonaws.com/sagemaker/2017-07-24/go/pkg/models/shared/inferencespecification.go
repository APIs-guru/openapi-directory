package shared

// InferenceSpecification
// Defines how to perform inference generation after a training job is run.
type InferenceSpecification struct {
	Containers                              []ModelPackageContainerDefinition   `json:"Containers"`
	SupportedContentTypes                   []string                            `json:"SupportedContentTypes"`
	SupportedRealtimeInferenceInstanceTypes []ProductionVariantInstanceTypeEnum `json:"SupportedRealtimeInferenceInstanceTypes,omitempty"`
	SupportedResponseMimeTypes              []string                            `json:"SupportedResponseMIMETypes"`
	SupportedTransformInstanceTypes         []TransformInstanceTypeEnum         `json:"SupportedTransformInstanceTypes,omitempty"`
}
