package shared

// Buyer
// This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date.
type Buyer struct {
	Username *string `json:"username,omitempty"`
}
