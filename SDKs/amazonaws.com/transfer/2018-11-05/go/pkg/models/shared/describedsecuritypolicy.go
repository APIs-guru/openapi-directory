package shared

type DescribedSecurityPolicy struct {
	Fips               *bool    `json:"Fips,omitempty"`
	SecurityPolicyName string   `json:"SecurityPolicyName"`
	SSHCiphers         []string `json:"SshCiphers,omitempty"`
	SSHKexs            []string `json:"SshKexs,omitempty"`
	SSHMacs            []string `json:"SshMacs,omitempty"`
	TLSCiphers         []string `json:"TlsCiphers,omitempty"`
}
