package shared

// MetadataProperties
// Metadata properties of the tracking entity, trial, or trial component.
type MetadataProperties struct {
	CommitID    *string `json:"CommitId,omitempty"`
	GeneratedBy *string `json:"GeneratedBy,omitempty"`
	ProjectID   *string `json:"ProjectId,omitempty"`
	Repository  *string `json:"Repository,omitempty"`
}
