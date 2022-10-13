package shared

type DescribePatchPropertiesResult struct {
	NextToken  *string             `json:"NextToken"`
	Properties []map[string]string `json:"Properties"`
}
