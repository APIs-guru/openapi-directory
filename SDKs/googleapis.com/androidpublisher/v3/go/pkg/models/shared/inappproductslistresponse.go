package shared



type InappproductsListResponse struct {
    Inappproduct []InAppProduct `json:"inappproduct,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PageInfo *PageInfo `json:"pageInfo,omitempty"`
    TokenPagination *TokenPagination `json:"tokenPagination,omitempty"`
    
}

