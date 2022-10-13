package shared

type DescribeActivationsFilter struct {
	FilterKey    *DescribeActivationsFilterKeysEnum `json:"FilterKey"`
	FilterValues []string                           `json:"FilterValues"`
}
