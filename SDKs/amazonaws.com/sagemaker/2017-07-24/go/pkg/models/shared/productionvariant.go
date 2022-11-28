package shared

// ProductionVariant
// Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.
type ProductionVariant struct {
	AcceleratorType      *ProductionVariantAcceleratorTypeEnum `json:"AcceleratorType,omitempty"`
	CoreDumpConfig       *ProductionVariantCoreDumpConfig      `json:"CoreDumpConfig,omitempty"`
	InitialInstanceCount int64                                 `json:"InitialInstanceCount"`
	InitialVariantWeight *float32                              `json:"InitialVariantWeight,omitempty"`
	InstanceType         ProductionVariantInstanceTypeEnum     `json:"InstanceType"`
	ModelName            string                                `json:"ModelName"`
	VariantName          string                                `json:"VariantName"`
}
