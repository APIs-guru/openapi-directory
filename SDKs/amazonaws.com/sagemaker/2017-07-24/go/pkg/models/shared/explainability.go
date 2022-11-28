package shared

// Explainability
// Contains explainability metrics for a model.
type Explainability struct {
	Report *MetricsSource `json:"Report,omitempty"`
}
