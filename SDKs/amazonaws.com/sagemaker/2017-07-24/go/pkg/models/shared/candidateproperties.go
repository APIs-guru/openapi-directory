package shared

type CandidateProperties struct {
	CandidateArtifactLocations *CandidateArtifactLocations `json:"CandidateArtifactLocations"`
	CandidateMetrics           []MetricDatum               `json:"CandidateMetrics"`
}
