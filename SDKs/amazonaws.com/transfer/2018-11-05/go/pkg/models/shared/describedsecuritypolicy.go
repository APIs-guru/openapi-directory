package shared

type DescribedSecurityPolicy struct {
	Fips               *bool    `json:"Fips"`
	SecurityPolicyName string   `json:"SecurityPolicyName"`
	SSHCiphers         []string `json:"SshCiphers"`
	SSHKexs            []string `json:"SshKexs"`
	SSHMacs            []string `json:"SshMacs"`
	TLSCiphers         []string `json:"TlsCiphers"`
}
