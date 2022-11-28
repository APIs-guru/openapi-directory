package shared

// DescribeActivationsFilter
// Filter for the DescribeActivation API.
type DescribeActivationsFilter struct {
	FilterKey    *DescribeActivationsFilterKeysEnum `json:"FilterKey,omitempty"`
	FilterValues []string                           `json:"FilterValues,omitempty"`
}
