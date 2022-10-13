package shared

type ListAliasesResponse struct {
	Aliases    []AliasListEntry `json:"Aliases"`
	NextMarker *string          `json:"NextMarker"`
	Truncated  *bool            `json:"Truncated"`
}
