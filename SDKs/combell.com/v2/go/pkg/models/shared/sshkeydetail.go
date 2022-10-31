package shared



type SSHKeyDetail struct {
    Fingerprint *string `json:"fingerprint,omitempty"`
    LinuxHostings []string `json:"linux_hostings,omitempty"`
    PublicKey *string `json:"public_key,omitempty"`
    
}

