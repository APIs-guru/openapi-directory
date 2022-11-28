package shared

// Service
// Information about an AWS service returned by the <a>DescribeServices</a> operation.
type Service struct {
	Categories []Category `json:"categories,omitempty"`
	Code       *string    `json:"code,omitempty"`
	Name       *string    `json:"name,omitempty"`
}
