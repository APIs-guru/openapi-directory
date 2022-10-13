package shared

type GetGroupsResult struct {
	Groups    []GroupSummary `json:"Groups"`
	NextToken *string        `json:"NextToken"`
}
