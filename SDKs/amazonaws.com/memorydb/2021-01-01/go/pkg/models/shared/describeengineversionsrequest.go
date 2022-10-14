package shared

type DescribeEngineVersionsRequest struct {
	DefaultOnly          *bool   `json:"DefaultOnly,omitempty"`
	EngineVersion        *string `json:"EngineVersion,omitempty"`
	MaxResults           *int64  `json:"MaxResults,omitempty"`
	NextToken            *string `json:"NextToken,omitempty"`
	ParameterGroupFamily *string `json:"ParameterGroupFamily,omitempty"`
}
