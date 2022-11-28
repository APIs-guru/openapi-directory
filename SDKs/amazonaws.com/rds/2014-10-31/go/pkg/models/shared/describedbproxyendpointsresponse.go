package shared

type DescribeDbProxyEndpointsResponse struct {
	DbProxyEndpoints []DbProxyEndpoint
	Marker           *string
}
