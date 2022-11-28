package shared

// SellingPrivileges
// A merchant's selling limit, and the status of their account registration.
type SellingPrivileges struct {
	SellerRegistrationCompleted *bool         `json:"sellerRegistrationCompleted,omitempty"`
	SellingLimit                *SellingLimit `json:"sellingLimit,omitempty"`
}
