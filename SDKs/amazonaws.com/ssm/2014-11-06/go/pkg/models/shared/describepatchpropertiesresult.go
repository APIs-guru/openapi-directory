package shared

type DescribePatchPropertiesResult struct {
	NextToken  *string             `json:"NextToken,omitempty"`
	Properties []map[string]string `json:"Properties,omitempty"`
}
