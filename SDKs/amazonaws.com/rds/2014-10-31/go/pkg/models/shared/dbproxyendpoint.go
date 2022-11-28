package shared

import (
	"time"
)

// DbProxyEndpoint
// <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
type DbProxyEndpoint struct {
	CreatedDate         *time.Time
	DbProxyEndpointArn  *string
	DbProxyEndpointName *string
	DbProxyName         *string
	Endpoint            *string
	IsDefault           *bool
	Status              *DbProxyEndpointStatusEnum
	TargetRole          *DbProxyEndpointTargetRoleEnum
	VpcID               *string
	VpcSecurityGroupIds []string
	VpcSubnetIds        []string
}
