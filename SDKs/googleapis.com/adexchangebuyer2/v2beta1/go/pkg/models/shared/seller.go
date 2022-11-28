package shared

// Seller
// Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
type Seller struct {
	AccountID    *string `json:"accountId,omitempty"`
	SubAccountID *string `json:"subAccountId,omitempty"`
}

// SellerInput
// Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
type SellerInput struct {
	AccountID *string `json:"accountId,omitempty"`
}
