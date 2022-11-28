package shared

// DescribeOperatingSystemsResponse
// The response to a <code>DescribeOperatingSystems</code> request.
type DescribeOperatingSystemsResponse struct {
	OperatingSystems []OperatingSystem `json:"OperatingSystems,omitempty"`
}
