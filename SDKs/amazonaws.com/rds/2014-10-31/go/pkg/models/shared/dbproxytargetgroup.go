package shared

import (
	"time"
)

// DbProxyTargetGroup
// <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
type DbProxyTargetGroup struct {
	ConnectionPoolConfig *ConnectionPoolConfigurationInfo
	CreatedDate          *time.Time
	DbProxyName          *string
	IsDefault            *bool
	Status               *string
	TargetGroupArn       *string
	TargetGroupName      *string
	UpdatedDate          *time.Time
}
