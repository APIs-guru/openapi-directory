package shared

type DescribeProjectVersionsResponse struct {
	NextToken                  *string                     `json:"NextToken"`
	ProjectVersionDescriptions []ProjectVersionDescription `json:"ProjectVersionDescriptions"`
}
