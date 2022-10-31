package shared

type GetResourceSharesResponse struct {
	NextToken      *string         `json:"nextToken,omitempty"`
	ResourceShares []ResourceShare `json:"resourceShares,omitempty"`
}
