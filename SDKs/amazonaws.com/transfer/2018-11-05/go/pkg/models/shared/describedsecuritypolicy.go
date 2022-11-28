package shared

// DescribedSecurityPolicy
// Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
type DescribedSecurityPolicy struct {
	Fips               *bool    `json:"Fips,omitempty"`
	SecurityPolicyName string   `json:"SecurityPolicyName"`
	SSHCiphers         []string `json:"SshCiphers,omitempty"`
	SSHKexs            []string `json:"SshKexs,omitempty"`
	SSHMacs            []string `json:"SshMacs,omitempty"`
	TLSCiphers         []string `json:"TlsCiphers,omitempty"`
}
