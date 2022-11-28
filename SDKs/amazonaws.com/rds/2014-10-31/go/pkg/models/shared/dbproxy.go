package shared

import (
	"time"
)

// DbProxy
// <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
type DbProxy struct {
	Auth                []UserAuthConfigInfo
	CreatedDate         *time.Time
	DbProxyArn          *string
	DbProxyName         *string
	DebugLogging        *bool
	Endpoint            *string
	EngineFamily        *string
	IdleClientTimeout   *int64
	RequireTLS          *bool
	RoleArn             *string
	Status              *DbProxyStatusEnum
	UpdatedDate         *time.Time
	VpcID               *string
	VpcSecurityGroupIds []string
	VpcSubnetIds        []string
}
