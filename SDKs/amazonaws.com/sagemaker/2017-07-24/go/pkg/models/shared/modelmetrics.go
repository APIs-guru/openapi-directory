package shared

// ModelMetrics
// Contains metrics captured from a model.
type ModelMetrics struct {
	Bias             *Bias             `json:"Bias,omitempty"`
	Explainability   *Explainability   `json:"Explainability,omitempty"`
	ModelDataQuality *ModelDataQuality `json:"ModelDataQuality,omitempty"`
	ModelQuality     *ModelQuality     `json:"ModelQuality,omitempty"`
}
