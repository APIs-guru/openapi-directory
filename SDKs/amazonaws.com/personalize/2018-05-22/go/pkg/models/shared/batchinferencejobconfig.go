package shared

// BatchInferenceJobConfig
// The configuration details of a batch inference job.
type BatchInferenceJobConfig struct {
	ItemExplorationConfig map[string]string `json:"itemExplorationConfig,omitempty"`
}
