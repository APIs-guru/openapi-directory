package shared

type DescribeProjectsResponse struct {
	NextToken           *string              `json:"NextToken"`
	ProjectDescriptions []ProjectDescription `json:"ProjectDescriptions"`
}
