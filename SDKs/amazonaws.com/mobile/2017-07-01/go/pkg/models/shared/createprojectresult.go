package shared

// CreateProjectResult
//
//	Result structure used in response to a request to create a project.
type CreateProjectResult struct {
	Details *ProjectDetails `json:"details,omitempty"`
}
