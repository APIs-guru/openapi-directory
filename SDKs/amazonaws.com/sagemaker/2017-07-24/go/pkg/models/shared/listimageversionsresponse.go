package shared

type ListImageVersionsResponse struct {
	ImageVersions []ImageVersion `json:"ImageVersions"`
	NextToken     *string        `json:"NextToken"`
}
