package shared

type StopWorkspacesRequest struct {
	StopWorkspaceRequests []StopRequest `json:"StopWorkspaceRequests"`
}
