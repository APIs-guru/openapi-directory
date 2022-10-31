package shared



type ProductsListResponse struct {
    PageInfo *PageInfo `json:"pageInfo,omitempty"`
    Product []Product `json:"product,omitempty"`
    TokenPagination *TokenPagination `json:"tokenPagination,omitempty"`
    
}

