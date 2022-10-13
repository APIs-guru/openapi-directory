package shared

type ListAliasesResponse struct {
	Aliases    []AliasConfiguration `json:"Aliases"`
	NextMarker *string              `json:"NextMarker"`
}
