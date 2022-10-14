package shared

type DescribeActivationsFilter struct {
	FilterKey    *DescribeActivationsFilterKeysEnum `json:"FilterKey,omitempty"`
	FilterValues []string                           `json:"FilterValues,omitempty"`
}
