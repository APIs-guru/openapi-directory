package shared

type AwsEc2SecurityGroupIPPermission struct {
	FromPort         *int64                               `json:"FromPort"`
	IPProtocol       *string                              `json:"IpProtocol"`
	IPRanges         []AwsEc2SecurityGroupIPRange         `json:"IpRanges"`
	Ipv6Ranges       []AwsEc2SecurityGroupIpv6Range       `json:"Ipv6Ranges"`
	PrefixListIds    []AwsEc2SecurityGroupPrefixListID    `json:"PrefixListIds"`
	ToPort           *int64                               `json:"ToPort"`
	UserIDGroupPairs []AwsEc2SecurityGroupUserIDGroupPair `json:"UserIdGroupPairs"`
}
