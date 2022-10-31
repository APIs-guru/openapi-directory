package shared

type ProductionVariant struct {
	AcceleratorType      *ProductionVariantAcceleratorTypeEnum `json:"AcceleratorType,omitempty"`
	CoreDumpConfig       *ProductionVariantCoreDumpConfig      `json:"CoreDumpConfig,omitempty"`
	InitialInstanceCount int64                                 `json:"InitialInstanceCount"`
	InitialVariantWeight *float32                              `json:"InitialVariantWeight,omitempty"`
	InstanceType         ProductionVariantInstanceTypeEnum     `json:"InstanceType"`
	ModelName            string                                `json:"ModelName"`
	VariantName          string                                `json:"VariantName"`
}
