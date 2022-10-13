package shared

type SellingPrivileges struct {
	SellerRegistrationCompleted *bool         `json:"sellerRegistrationCompleted"`
	SellingLimit                *SellingLimit `json:"sellingLimit"`
}
