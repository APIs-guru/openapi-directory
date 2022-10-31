package shared

type DeleteProjectResult struct {
	DeletedResources  []Resource `json:"deletedResources,omitempty"`
	OrphanedResources []Resource `json:"orphanedResources,omitempty"`
}
