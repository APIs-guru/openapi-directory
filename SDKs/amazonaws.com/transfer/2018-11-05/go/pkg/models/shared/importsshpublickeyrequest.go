package shared



type ImportSSHPublicKeyRequest struct {
    ServerID string `json:"ServerId"`
    SSHPublicKeyBody string `json:"SshPublicKeyBody"`
    UserName string `json:"UserName"`
    
}

