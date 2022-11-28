package shared

// DescribeRaidArraysResult
// Contains the response to a <code>DescribeRaidArrays</code> request.
type DescribeRaidArraysResult struct {
	RaidArrays []RaidArray `json:"RaidArrays,omitempty"`
}
