package shared

type ModelMetrics struct {
	Bias             *Bias             `json:"Bias"`
	Explainability   *Explainability   `json:"Explainability"`
	ModelDataQuality *ModelDataQuality `json:"ModelDataQuality"`
	ModelQuality     *ModelQuality     `json:"ModelQuality"`
}
