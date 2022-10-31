package shared

type DependencyRevision struct {
	ID             *string `json:"id,omitempty"`
	RevisionNumber *int64  `json:"revisionNumber,omitempty"`
}
