package shared

type GetResourceSharesResponse struct {
	NextToken      *string         `json:"nextToken"`
	ResourceShares []ResourceShare `json:"resourceShares"`
}
