package shared

type AwsEc2VpcDetails struct {
	CidrBlockAssociationSet     []CidrBlockAssociation     `json:"CidrBlockAssociationSet"`
	DhcpOptionsID               *string                    `json:"DhcpOptionsId"`
	Ipv6CidrBlockAssociationSet []Ipv6CidrBlockAssociation `json:"Ipv6CidrBlockAssociationSet"`
	State                       *string                    `json:"State"`
}
