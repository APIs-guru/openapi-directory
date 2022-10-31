package shared

type VoidedPurchasesListResponse struct {
	PageInfo        *PageInfo        `json:"pageInfo,omitempty"`
	TokenPagination *TokenPagination `json:"tokenPagination,omitempty"`
	VoidedPurchases []VoidedPurchase `json:"voidedPurchases,omitempty"`
}
