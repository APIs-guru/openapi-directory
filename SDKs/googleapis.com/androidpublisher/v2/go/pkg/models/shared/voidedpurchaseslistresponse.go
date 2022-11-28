package shared

type VoidedPurchasesListResponse struct {
	PageInfo        *PageInfo
	TokenPagination *TokenPagination
	VoidedPurchases []VoidedPurchase
}
