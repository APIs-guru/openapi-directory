package shared

type ProcessingOutput struct {
	AppManaged         *bool                         `json:"AppManaged"`
	FeatureStoreOutput *ProcessingFeatureStoreOutput `json:"FeatureStoreOutput"`
	OutputName         string                        `json:"OutputName"`
	S3Output           *ProcessingS3Output           `json:"S3Output"`
}
