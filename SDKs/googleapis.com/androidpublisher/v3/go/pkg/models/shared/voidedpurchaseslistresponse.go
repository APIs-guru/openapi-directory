package shared

type VoidedPurchasesListResponse struct {
	PageInfo        *PageInfo        `json:"pageInfo"`
	TokenPagination *TokenPagination `json:"tokenPagination"`
	VoidedPurchases []VoidedPurchase `json:"voidedPurchases"`
}
