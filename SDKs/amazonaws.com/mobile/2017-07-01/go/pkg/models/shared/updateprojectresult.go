package shared

// UpdateProjectResult
//
//	Result structure used for requests to updated project configuration.
type UpdateProjectResult struct {
	Details *ProjectDetails `json:"details,omitempty"`
}
