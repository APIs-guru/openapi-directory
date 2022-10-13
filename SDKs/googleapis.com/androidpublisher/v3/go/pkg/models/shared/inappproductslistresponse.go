package shared

type InappproductsListResponse struct {
	Inappproduct    []InAppProduct   `json:"inappproduct"`
	Kind            *string          `json:"kind"`
	PageInfo        *PageInfo        `json:"pageInfo"`
	TokenPagination *TokenPagination `json:"tokenPagination"`
}
