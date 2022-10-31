package shared

type ImportSSHPublicKeyResponse struct {
	ServerID       string `json:"ServerId"`
	SSHPublicKeyID string `json:"SshPublicKeyId"`
	UserName       string `json:"UserName"`
}
