package shared

// Buyer
// Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
type Buyer struct {
	AccountID *string `json:"accountId,omitempty"`
}
