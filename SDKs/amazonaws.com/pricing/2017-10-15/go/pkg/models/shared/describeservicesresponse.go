package shared

type DescribeServicesResponse struct {
	FormatVersion *string   `json:"FormatVersion,omitempty"`
	NextToken     *string   `json:"NextToken,omitempty"`
	Services      []Service `json:"Services,omitempty"`
}
