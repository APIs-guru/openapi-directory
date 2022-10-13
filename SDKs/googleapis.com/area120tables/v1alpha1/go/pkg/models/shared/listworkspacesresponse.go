package shared

type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Workspaces    []Workspace `json:"workspaces"`
}
