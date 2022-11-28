package shared

type InappproductsListResponse struct {
	Inappproduct    []InAppProduct
	Kind            *string
	PageInfo        *PageInfo
	TokenPagination *TokenPagination
}
