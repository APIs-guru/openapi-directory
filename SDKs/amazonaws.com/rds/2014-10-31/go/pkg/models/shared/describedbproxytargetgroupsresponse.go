package shared

type DescribeDbProxyTargetGroupsResponse struct {
	Marker       *string
	TargetGroups []DbProxyTargetGroup
}
