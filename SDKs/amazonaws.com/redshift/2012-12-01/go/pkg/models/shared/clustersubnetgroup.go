package shared

// ClusterSubnetGroup
// Describes a subnet group.
type ClusterSubnetGroup struct {
	ClusterSubnetGroupName *string
	Description            *string
	SubnetGroupStatus      *string
	Subnets                []Subnet
	Tags                   []Tag
	VpcID                  *string
}
