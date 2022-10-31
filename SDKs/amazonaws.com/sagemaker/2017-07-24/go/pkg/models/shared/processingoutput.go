package shared

type ProcessingOutput struct {
	AppManaged         *bool                         `json:"AppManaged,omitempty"`
	FeatureStoreOutput *ProcessingFeatureStoreOutput `json:"FeatureStoreOutput,omitempty"`
	OutputName         string                        `json:"OutputName"`
	S3Output           *ProcessingS3Output           `json:"S3Output,omitempty"`
}
