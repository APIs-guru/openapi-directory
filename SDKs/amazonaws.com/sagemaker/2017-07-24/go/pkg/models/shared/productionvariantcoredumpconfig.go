package shared

// ProductionVariantCoreDumpConfig
// Specifies configuration for a core dump from the model container when the process crashes.
type ProductionVariantCoreDumpConfig struct {
	DestinationS3URI string  `json:"DestinationS3Uri"`
	KmsKeyID         *string `json:"KmsKeyId,omitempty"`
}
