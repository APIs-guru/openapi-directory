package shared

type DescribeProjectsResponse struct {
	NextToken           *string              `json:"NextToken,omitempty"`
	ProjectDescriptions []ProjectDescription `json:"ProjectDescriptions,omitempty"`
}
