package shared

import (
	"time"
)

// EndpointAccess
// Describes a Redshift-managed VPC endpoint.
type EndpointAccess struct {
	Address            *string
	ClusterIdentifier  *string
	EndpointCreateTime *time.Time
	EndpointName       *string
	EndpointStatus     *string
	Port               *int64
	ResourceOwner      *string
	SubnetGroupName    *string
	VpcEndpoint        *VpcEndpoint
	VpcSecurityGroups  []VpcSecurityGroupMembership
}
