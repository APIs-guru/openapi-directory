package shared

// DbProxyTarget
// <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
type DbProxyTarget struct {
	Endpoint         *string
	Port             *int64
	RdsResourceID    *string
	Role             *TargetRoleEnum
	TargetArn        *string
	TargetHealth     *TargetHealth
	TrackedClusterID *string
	Type             *TargetTypeEnum
}
