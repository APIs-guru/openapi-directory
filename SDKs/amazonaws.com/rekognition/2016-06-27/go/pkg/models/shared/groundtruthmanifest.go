package shared

// GroundTruthManifest
// The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
type GroundTruthManifest struct {
	S3Object *S3Object `json:"S3Object,omitempty"`
}
