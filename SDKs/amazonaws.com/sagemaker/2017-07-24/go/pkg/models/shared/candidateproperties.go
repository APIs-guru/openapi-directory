package shared



type CandidateProperties struct {
    CandidateArtifactLocations *CandidateArtifactLocations `json:"CandidateArtifactLocations,omitempty"`
    CandidateMetrics []MetricDatum `json:"CandidateMetrics,omitempty"`
    
}

