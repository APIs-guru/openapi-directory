package shared

type ProductionVariantCoreDumpConfig struct {
	DestinationS3URI string  `json:"DestinationS3Uri"`
	KmsKeyID         *string `json:"KmsKeyId,omitempty"`
}
