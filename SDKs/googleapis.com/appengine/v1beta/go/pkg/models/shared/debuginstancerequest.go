package shared

// DebugInstanceRequest
// Request message for Instances.DebugInstance.
type DebugInstanceRequest struct {
	SSHKey *string `json:"sshKey,omitempty"`
}
