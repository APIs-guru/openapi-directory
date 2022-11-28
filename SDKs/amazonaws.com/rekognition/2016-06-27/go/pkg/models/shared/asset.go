package shared

// Asset
// Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training.
type Asset struct {
	GroundTruthManifest *GroundTruthManifest `json:"GroundTruthManifest,omitempty"`
}
