package shared

type DescribeDbProxyTargetsResponse struct {
	Marker  *string
	Targets []DbProxyTarget
}
