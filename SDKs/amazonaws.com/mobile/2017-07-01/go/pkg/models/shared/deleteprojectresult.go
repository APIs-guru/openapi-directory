package shared

// DeleteProjectResult
//
//	Result structure used in response to request to delete a project.
type DeleteProjectResult struct {
	DeletedResources  []Resource `json:"deletedResources,omitempty"`
	OrphanedResources []Resource `json:"orphanedResources,omitempty"`
}
