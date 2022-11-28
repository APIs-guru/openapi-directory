package shared

// DependencyRevision
// An object that contains the ID and revision number of a workflow or system that is part of a deployment.
type DependencyRevision struct {
	ID             *string `json:"id,omitempty"`
	RevisionNumber *int64  `json:"revisionNumber,omitempty"`
}
