package shared

// CandidateProperties
// The properties of an AutoML candidate job.
type CandidateProperties struct {
	CandidateArtifactLocations *CandidateArtifactLocations `json:"CandidateArtifactLocations,omitempty"`
	CandidateMetrics           []MetricDatum               `json:"CandidateMetrics,omitempty"`
}
