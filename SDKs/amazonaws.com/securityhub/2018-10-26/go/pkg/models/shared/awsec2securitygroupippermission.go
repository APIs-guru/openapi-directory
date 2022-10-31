package shared



type AwsEc2SecurityGroupIPPermission struct {
    FromPort *int64 `json:"FromPort,omitempty"`
    IPProtocol *string `json:"IpProtocol,omitempty"`
    IPRanges []AwsEc2SecurityGroupIPRange `json:"IpRanges,omitempty"`
    Ipv6Ranges []AwsEc2SecurityGroupIpv6Range `json:"Ipv6Ranges,omitempty"`
    PrefixListIds []AwsEc2SecurityGroupPrefixListID `json:"PrefixListIds,omitempty"`
    ToPort *int64 `json:"ToPort,omitempty"`
    UserIDGroupPairs []AwsEc2SecurityGroupUserIDGroupPair `json:"UserIdGroupPairs,omitempty"`
    
}

