package shared

type AwsEc2NetworkACLEntry struct {
	CidrBlock     *string          `json:"CidrBlock"`
	Egress        *bool            `json:"Egress"`
	IcmpTypeCode  *IcmpTypeCode    `json:"IcmpTypeCode"`
	Ipv6CidrBlock *string          `json:"Ipv6CidrBlock"`
	PortRange     *PortRangeFromTo `json:"PortRange"`
	Protocol      *string          `json:"Protocol"`
	RuleAction    *string          `json:"RuleAction"`
	RuleNumber    *int64           `json:"RuleNumber"`
}
