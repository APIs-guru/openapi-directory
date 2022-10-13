package shared

type DescribeEngineVersionsResponse struct {
	EngineVersions []EngineVersionInfo `json:"EngineVersions"`
	NextToken      *string             `json:"NextToken"`
}
