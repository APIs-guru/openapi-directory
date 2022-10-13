package shared

type ProductionVariant struct {
	AcceleratorType      *ProductionVariantAcceleratorTypeEnum `json:"AcceleratorType"`
	CoreDumpConfig       *ProductionVariantCoreDumpConfig      `json:"CoreDumpConfig"`
	InitialInstanceCount int64                                 `json:"InitialInstanceCount"`
	InitialVariantWeight *float32                              `json:"InitialVariantWeight"`
	InstanceType         ProductionVariantInstanceTypeEnum     `json:"InstanceType"`
	ModelName            string                                `json:"ModelName"`
	VariantName          string                                `json:"VariantName"`
}
