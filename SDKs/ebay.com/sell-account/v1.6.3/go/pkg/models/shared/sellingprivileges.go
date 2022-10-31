package shared

type SellingPrivileges struct {
	SellerRegistrationCompleted *bool         `json:"sellerRegistrationCompleted,omitempty"`
	SellingLimit                *SellingLimit `json:"sellingLimit,omitempty"`
}
