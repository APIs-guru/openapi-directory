package shared

type RebootWorkspacesRequest struct {
	RebootWorkspaceRequests []RebootRequest `json:"RebootWorkspaceRequests"`
}
