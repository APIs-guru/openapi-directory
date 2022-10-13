package shared

type ProductsListResponse struct {
	PageInfo        *PageInfo        `json:"pageInfo"`
	Product         []Product        `json:"product"`
	TokenPagination *TokenPagination `json:"tokenPagination"`
}
