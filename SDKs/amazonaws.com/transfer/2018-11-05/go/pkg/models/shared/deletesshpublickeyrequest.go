package shared



type DeleteSSHPublicKeyRequest struct {
    ServerID string `json:"ServerId"`
    SSHPublicKeyID string `json:"SshPublicKeyId"`
    UserName string `json:"UserName"`
    
}

