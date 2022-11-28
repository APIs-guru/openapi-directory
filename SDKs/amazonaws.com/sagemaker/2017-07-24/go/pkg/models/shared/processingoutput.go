package shared

// ProcessingOutput
// Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
type ProcessingOutput struct {
	AppManaged         *bool                         `json:"AppManaged,omitempty"`
	FeatureStoreOutput *ProcessingFeatureStoreOutput `json:"FeatureStoreOutput,omitempty"`
	OutputName         string                        `json:"OutputName"`
	S3Output           *ProcessingS3Output           `json:"S3Output,omitempty"`
}
