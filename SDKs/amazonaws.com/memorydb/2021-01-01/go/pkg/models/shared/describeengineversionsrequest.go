package shared

type DescribeEngineVersionsRequest struct {
	DefaultOnly          *bool   `json:"DefaultOnly"`
	EngineVersion        *string `json:"EngineVersion"`
	MaxResults           *int64  `json:"MaxResults"`
	NextToken            *string `json:"NextToken"`
	ParameterGroupFamily *string `json:"ParameterGroupFamily"`
}
