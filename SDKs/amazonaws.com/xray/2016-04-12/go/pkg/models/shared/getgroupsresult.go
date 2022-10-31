package shared

type GetGroupsResult struct {
	Groups    []GroupSummary `json:"Groups,omitempty"`
	NextToken *string        `json:"NextToken,omitempty"`
}
