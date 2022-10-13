package shared

type DescribeServicesResponse struct {
	FormatVersion *string   `json:"FormatVersion"`
	NextToken     *string   `json:"NextToken"`
	Services      []Service `json:"Services"`
}
