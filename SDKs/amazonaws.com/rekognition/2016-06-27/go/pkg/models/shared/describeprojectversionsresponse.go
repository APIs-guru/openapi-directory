package shared

type DescribeProjectVersionsResponse struct {
	NextToken                  *string                     `json:"NextToken,omitempty"`
	ProjectVersionDescriptions []ProjectVersionDescription `json:"ProjectVersionDescriptions,omitempty"`
}
