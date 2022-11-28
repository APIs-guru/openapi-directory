package shared

// DescribeMlModelsOutput
// Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
type DescribeMlModelsOutput struct {
	NextToken *string   `json:"NextToken,omitempty"`
	Results   []MlModel `json:"Results,omitempty"`
}
