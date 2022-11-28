package shared

// ListProjectsResult
//
//	Result structure used for requests to list projects in AWS Mobile Hub.
type ListProjectsResult struct {
	NextToken *string          `json:"nextToken,omitempty"`
	Projects  []ProjectSummary `json:"projects,omitempty"`
}
