package shared

// ListWorkspacesResponse
// Response message for TablesService.ListWorkspaces.
type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Workspaces    []Workspace `json:"workspaces,omitempty"`
}
