package shared

// DescribeServicesResponse
// The list of AWS services returned by the <a>DescribeServices</a> operation.
type DescribeServicesResponse struct {
	Services []Service `json:"services,omitempty"`
}
