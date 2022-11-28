package shared

// ImportSSHPublicKeyResponse
// Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
type ImportSSHPublicKeyResponse struct {
	ServerID       string `json:"ServerId"`
	SSHPublicKeyID string `json:"SshPublicKeyId"`
	UserName       string `json:"UserName"`
}
