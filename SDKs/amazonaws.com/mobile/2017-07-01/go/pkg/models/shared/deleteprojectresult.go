package shared

type DeleteProjectResult struct {
	DeletedResources  []Resource `json:"deletedResources"`
	OrphanedResources []Resource `json:"orphanedResources"`
}
