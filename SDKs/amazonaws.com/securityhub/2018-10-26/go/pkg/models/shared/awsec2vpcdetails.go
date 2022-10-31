package shared



type AwsEc2VpcDetails struct {
    CidrBlockAssociationSet []CidrBlockAssociation `json:"CidrBlockAssociationSet,omitempty"`
    DhcpOptionsID *string `json:"DhcpOptionsId,omitempty"`
    Ipv6CidrBlockAssociationSet []Ipv6CidrBlockAssociation `json:"Ipv6CidrBlockAssociationSet,omitempty"`
    State *string `json:"State,omitempty"`
    
}

