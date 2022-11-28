package shared

// ListTasksResponse
// ListTasks Response.
type ListTasksResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Tasks         []Task   `json:"tasks,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
