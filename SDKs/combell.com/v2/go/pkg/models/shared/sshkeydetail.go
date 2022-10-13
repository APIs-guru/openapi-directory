package shared

type SSHKeyDetail struct {
	Fingerprint   *string  `json:"fingerprint"`
	LinuxHostings []string `json:"linux_hostings"`
	PublicKey     *string  `json:"public_key"`
}
