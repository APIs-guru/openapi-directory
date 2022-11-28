package shared

type DescribeDbProxiesResponse struct {
	DbProxies []DbProxy
	Marker    *string
}
