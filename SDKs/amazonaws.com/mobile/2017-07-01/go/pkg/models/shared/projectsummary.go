package shared

// ProjectSummary
//
//	Summary information about an AWS Mobile Hub project.
type ProjectSummary struct {
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
