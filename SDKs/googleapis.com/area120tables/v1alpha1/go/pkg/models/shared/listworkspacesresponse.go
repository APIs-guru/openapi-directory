package shared

type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Workspaces    []Workspace `json:"workspaces,omitempty"`
}
