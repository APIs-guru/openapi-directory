package shared

type DescribeMlModelsOutput struct {
	NextToken *string   `json:"NextToken"`
	Results   []MlModel `json:"Results"`
}
