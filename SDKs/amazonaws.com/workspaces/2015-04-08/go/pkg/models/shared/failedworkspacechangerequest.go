package shared

// FailedWorkspaceChangeRequest
// Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
type FailedWorkspaceChangeRequest struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	WorkspaceID  *string `json:"WorkspaceId,omitempty"`
}
