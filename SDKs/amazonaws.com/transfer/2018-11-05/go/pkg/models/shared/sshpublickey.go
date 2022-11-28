package shared

import (
	"time"
)

// SSHPublicKey
// Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
type SSHPublicKey struct {
	DateImported     time.Time `json:"DateImported"`
	SSHPublicKeyBody string    `json:"SshPublicKeyBody"`
	SSHPublicKeyID   string    `json:"SshPublicKeyId"`
}
