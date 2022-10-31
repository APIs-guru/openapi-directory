package shared

type DescribeStacksResult struct {
	Stacks []Stack `json:"Stacks,omitempty"`
}
