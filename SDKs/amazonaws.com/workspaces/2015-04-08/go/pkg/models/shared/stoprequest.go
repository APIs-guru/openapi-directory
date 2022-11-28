package shared

// StopRequest
// Describes the information used to stop a WorkSpace.
type StopRequest struct {
	WorkspaceID *string `json:"WorkspaceId,omitempty"`
}
