package shared

// AutoMlJobArtifacts
// The artifacts that are generated during an AutoML job.
type AutoMlJobArtifacts struct {
	CandidateDefinitionNotebookLocation *string `json:"CandidateDefinitionNotebookLocation,omitempty"`
	DataExplorationNotebookLocation     *string `json:"DataExplorationNotebookLocation,omitempty"`
}
