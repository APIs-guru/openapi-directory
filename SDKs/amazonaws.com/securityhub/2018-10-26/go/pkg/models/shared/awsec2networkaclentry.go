package shared

// AwsEc2NetworkACLEntry
// A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
type AwsEc2NetworkACLEntry struct {
	CidrBlock     *string          `json:"CidrBlock,omitempty"`
	Egress        *bool            `json:"Egress,omitempty"`
	IcmpTypeCode  *IcmpTypeCode    `json:"IcmpTypeCode,omitempty"`
	Ipv6CidrBlock *string          `json:"Ipv6CidrBlock,omitempty"`
	PortRange     *PortRangeFromTo `json:"PortRange,omitempty"`
	Protocol      *string          `json:"Protocol,omitempty"`
	RuleAction    *string          `json:"RuleAction,omitempty"`
	RuleNumber    *int64           `json:"RuleNumber,omitempty"`
}
