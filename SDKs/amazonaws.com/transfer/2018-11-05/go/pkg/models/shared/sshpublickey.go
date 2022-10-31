package shared

import (
"time")

type SSHPublicKey struct {
    DateImported time.Time `json:"DateImported"`
    SSHPublicKeyBody string `json:"SshPublicKeyBody"`
    SSHPublicKeyID string `json:"SshPublicKeyId"`
    
}

